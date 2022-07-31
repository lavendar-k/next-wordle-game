import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useData } from '../../contexts/Data';
import { useTheme } from '../../contexts/Theme';
import { answers } from '../../shared/constants/answers';
import { keys, keyState } from '../../shared/constants/enums';
import { keysArray, keysLayout } from '../../shared/constants/keys';
import { Alert } from '../Alert';
import Key from './Key';
import styles from './Keyboard.module.scss';

const Keyboard = () => {
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const {
        gameData,
        setGameData,
        currentWord,
        setCurrentWord,
        rowShakeControls,
        answer,
        pushStatistics,
    } = useData();

    const { theme } = useTheme();

    const handleKeyInput = (key: keys) => {
        if (gameData.board.length >= 6 || isInputDisabled) {
            return;
        }
        if (key == keys.Backspace) {
            setCurrentWord(prev => prev.slice(0, -1));
        } else if (key === keys.Enter) {
            if (currentWord.length !== 5) {
                return;
            }
            if (!answers.includes(currentWord)) {
                setAlertMessage('Not in word list');
                setIsAlertOpen(true);
                rowShakeControls.start('animate');
                return;
            }
            setGameData(prev => ({
                ...prev,
                board: [...prev.board, currentWord],
            }));
            setCurrentWord('');
            setIsInputDisabled(true);
        } else {
            setCurrentWord(prev => (prev.length < 5 ? prev + key : prev));
        }
    };

    const handleSetBoardState = (index: number, state: keyState) => {
        setGameData(prev => ({
            ...prev,
            boardStates: prev.boardStates.map((row, i) =>
                i === gameData.board.length - 1
                    ? row.map((s, j) => (j === index ? state : s))
                    : row
            ),
        }));
    };

    const handleSetKeyState = (letter: string, state: keyState) => {
        setGameData(prev => ({
            ...prev,
            keyStates: {
                ...prev.keyStates,
                [letter]: state,
            },
        }));
    };

    useEffect(() => {
        if (gameData.board.length === 0 || !isInputDisabled) {
            return;
        }
        const timeoutSpan = 300;
        gameData.board[gameData.board.length - 1]
            .split('')
            .forEach((letter: string, index) =>
                setTimeout(() => {
                    if (letter === answer[index]) {
                        handleSetBoardState(index, keyState.Correct);
                    } else if (answer.includes(letter)) {
                        handleSetBoardState(index, keyState.Present);
                    } else {
                        handleSetBoardState(index, keyState.Absent);
                    }
                }, timeoutSpan * index)
            );
        setTimeout(() => {
            setIsInputDisabled(false);
            gameData.board[gameData.board.length - 1]
                .split('')
                .forEach((letter: string, index) => {
                    if (letter === answer[index]) {
                        handleSetKeyState(letter, keyState.Correct);
                    } else if (
                        answer.includes(letter) &&
                        gameData.keyStates[letter] !== keyState.Correct
                    ) {
                        handleSetKeyState(letter, keyState.Present);
                    } else if (
                        gameData.keyStates[letter] !== keyState.Correct &&
                        gameData.keyStates[letter] !== keyState.Present
                    ) {
                        handleSetKeyState(letter, keyState.Absent);
                    }
                });
        }, 1500);
        if (gameData.board[gameData.board.length - 1] === answer) {
            pushStatistics(gameData.board.length);
            setAlertMessage('You won!');
            setIsAlertOpen(true);
        } else if (gameData.board.length === 6) {
            pushStatistics(gameData.board.length + 1);
            setAlertMessage('You lost!');
            setIsAlertOpen(true);
        }
    }, [gameData.board]);

    useEffect(() => {
        const keyPressListener = (event: KeyboardEvent) => {
            if (
                !keysArray.includes(event.key) ||
                gameData.keyStates[event.key] === keyState.Absent
            ) {
                return;
            }
            handleKeyInput(event.key as keys);
        };
        window.addEventListener('keydown', keyPressListener);
        return () => {
            window.removeEventListener('keydown', keyPressListener);
        };
    }, []);

    return (
        <>
            <div className={clsx(styles.wrapper, styles[theme])}>
                <div className={styles.keyboard}>
                    {keysLayout.map((row, i) => (
                        <div key={i} className={styles.row}>
                            {i === 1 && <div className={styles.spacer} />}
                            {row.map((key, j) => (
                                <Key
                                    key={`keyboard-${i}-${j}`}
                                    content={key as keys}
                                    handleKeyInput={handleKeyInput}
                                    state={gameData.keyStates[key]}
                                />
                            ))}
                            {i === 1 && <div className={styles.spacer} />}
                        </div>
                    ))}
                </div>
            </div>
            <Alert
                open={isAlertOpen}
                onClose={() => setIsAlertOpen(false)}
                message={alertMessage}
            />
        </>
    );
};

export default Keyboard;
