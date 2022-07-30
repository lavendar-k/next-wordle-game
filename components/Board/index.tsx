import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useData } from '../../contexts/Data';
import { useTheme } from '../../contexts/Theme';
import { keyState } from '../../shared/constants/enums';
import styles from './Board.module.scss';
import Tile from './Tile';

const Board = () => {
    const { gameData, currentWord, rowShakeControls } = useData();
    const { theme } = useTheme();
    return (
        <div className={clsx(styles.wrapper, styles[theme])}>
            <div className={styles.board}>
                {gameData.board.map((word, i) => (
                    <div key={i} className={styles.row}>
                        {word.split('').map((letter, j) => (
                            <AnimatePresence
                                key={`prev-${i * 5 + j}`}
                                exitBeforeEnter
                            >
                                <Tile
                                    key={`prev-${i * 5 + j}-state-${
                                        gameData.boardStates[i][j]
                                    }`}
                                    letter={letter}
                                    state={gameData.boardStates[i][j]}
                                />
                            </AnimatePresence>
                        ))}
                    </div>
                ))}
                {gameData.board.length < 6 && (
                    <motion.div
                        className={styles.row}
                        animate={rowShakeControls}
                        variants={rowShakeVariants}
                    >
                        {currentWord.split('').map((letter, i) => (
                            <div className={styles.tileWrapper} key={i}>
                                <div className={styles.tileDummy}>
                                    <Tile
                                        letter={letter}
                                        state={keyState.Input}
                                    />
                                </div>
                            </div>
                        ))}
                        {currentWord.length < 5 &&
                            Array(5 - currentWord.length)
                                .fill('')
                                .map((_, i) => (
                                    <div
                                        className={styles.tileWrapper}
                                        key={`currentWord-${i}`}
                                    >
                                        <div className={styles.tileDummy}>
                                            <Tile />
                                        </div>
                                    </div>
                                ))}
                    </motion.div>
                )}
                {gameData.board.length < 5 &&
                    Array(5 - gameData.board.length)
                        .fill('')
                        .map((_, i) => (
                            <div key={i} className={styles.row}>
                                {Array(5)
                                    .fill('')
                                    .map((_, j) => (
                                        <div
                                            className={styles.tileWrapper}
                                            key={`next-${i * 5 + j}`}
                                        >
                                            <div className={styles.tileDummy}>
                                                <Tile />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default Board;

const rowShakeVariants = {
    animate: {
        x: 0,
        transition: {
            type: 'spring',
            velocity: -320,
            stiffness: 1600,
            damping: 8,
        },
    },
};
