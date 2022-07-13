import { AnimationControls, useAnimation } from 'framer-motion';
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react';
import { answers } from '../../shared/constants/answers';
import { IGameData, IStatistics } from '../../shared/constants/interfaces';
import {
    initialBoardStates,
    initialKeyStates,
} from '../../shared/constants/keys';
import getCurrentDate from '../../shared/functions/getCurrentDate';
import getRandomNumber from '../../shared/functions/getRandomNumber';
import useLocalStorage from '../../shared/hooks/useLocalStorage';

const GameDataContext = createContext<IGameDataContext>({
    gameData: {
        date: getCurrentDate(),
        board: [],
        keyStates: initialKeyStates,
        boardStates: initialBoardStates,
    },
    setGameData: () => null,
    currentWord: '',
    setCurrentWord: () => null,
    answer: '',
    statistics: {},
    pushStatistics: () => null,
    rowShakeControls: {} as AnimationControls,
});

export const useGameData = () => useContext(GameDataContext);

export const GameDataProvider = ({ children }: IProps) => {
    const [gameData, setGameData] = useState<IGameData>({
        date: getCurrentDate(),
        board: [],
        keyStates: initialKeyStates,
        boardStates: initialBoardStates,
    });
    const [statistics, setStatistics] = useState<IStatistics>({});
    const [currentWord, setCurrentWord] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');

    const [storageGameData, setStorageGameData] = useLocalStorage<IGameData>(
        'gameData',
        {
            date: getCurrentDate(),
            board: [],
            keyStates: initialKeyStates,
            boardStates: initialBoardStates,
        }
    );
    const [storageStatistics, setStorageStatistics] =
        useLocalStorage<IStatistics>('statistics', {});

    const getAnswer = () => {
        const randomNumber = getRandomNumber();
        const answer = answers[randomNumber];
        return answer;
    };

    const pushStatistics = (count: number) => {
        const date = getCurrentDate();
        const newStatistics = statistics;
        newStatistics[date] = count;
        setStatistics(newStatistics);
    };

    const rowShakeControls = useAnimation();

    useEffect(() => {
        if (storageGameData.date !== getCurrentDate()) {
            setGameData({
                date: getCurrentDate(),
                board: [],
                keyStates: initialKeyStates,
                boardStates: initialBoardStates,
            });
        } else {
            setGameData(storageGameData);
        }
        setStatistics(storageStatistics);
        setAnswer(getAnswer());
    }, []);

    useEffect(() => {
        setStorageGameData(gameData);
    }, [gameData]);

    useEffect(() => {
        setStorageStatistics(statistics);
    }, [statistics]);

    return (
        <GameDataContext.Provider
            value={{
                gameData,
                setGameData,
                currentWord,
                setCurrentWord,
                answer,
                statistics,
                pushStatistics,
                rowShakeControls,
            }}
        >
            {children}
        </GameDataContext.Provider>
    );
};

interface IProps {
    children: React.ReactNode;
}

interface IGameDataContext {
    gameData: IGameData;
    setGameData: Dispatch<SetStateAction<IGameData>>;
    currentWord: string;
    setCurrentWord: Dispatch<SetStateAction<string>>;
    answer: string;
    statistics: IStatistics | null;
    pushStatistics: (count: number) => void;
    rowShakeControls: AnimationControls;
}
