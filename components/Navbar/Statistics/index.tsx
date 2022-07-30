import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useData } from '../../../contexts/Data';
import { useTheme } from '../../../contexts/Theme';
import styles from './Statistics.module.scss';

const Statistics = () => {
    const [guessData, setGuessData] = useState<IGuessData>(initialGuessData);
    const [maxGuessCount, setMaxGuessCount] = useState<number>(0);
    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const [maxStreak, setMaxStreak] = useState<number>(0);

    const { statistics } = useData();
    const { theme } = useTheme();

    useEffect(() => {
        setGuessData(initialGuessData);
        Object.values(statistics).forEach(stat => {
            setGuessData(prev => ({
                ...prev,
                [stat]: prev[`${stat}`] + 1,
            }));
        });
    }, [statistics]);

    useEffect(() => {
        setMaxGuessCount(
            Math.max(
                ...Object.entries(guessData)
                    .filter(([key]) => Number(key) < 7)
                    .map(([_, value]) => value)
            )
        );

        const statsArray = Object.values(statistics);

        let i;
        let cur = 0;
        let max = 0;
        for (i = statsArray.length - 1; i >= 0; i--) {
            if (statsArray[i] < 7) {
                cur++;
                max = Math.max(max, cur);
            } else {
                cur = 0;
            }
        }
        setCurrentStreak(cur);
        setMaxStreak(max);
    }, [guessData]);

    return (
        <div className={clsx(styles.statistics, styles[theme])}>
            <h1 style={{ marginTop: 0 }}>Statistics</h1>
            <div className={styles.summary}>
                <div className={styles.item}>
                    <span className={styles.value}>
                        {Object.keys(statistics).length}
                    </span>
                    <span className={styles.key}>Played</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.value}>
                        {(Object.entries(guessData)
                            .filter(([key]) => Number(key) < 7)
                            .reduce((total, [_, value]) => total + value, 0) /
                            (Object.entries(guessData).reduce(
                                (total, [_, value]) => total + value,
                                0
                            ) || 1)) *
                            100}
                    </span>
                    <span className={styles.key}>Win %</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.value}>{currentStreak}</span>
                    <span className={styles.key}>Current Streak</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.value}>{maxStreak}</span>
                    <span className={styles.key}>Max Streak</span>
                </div>
            </div>
            <h1>Guess Distribution</h1>
            <div className={styles.graph}>
                {Object.entries(guessData)
                    .filter(([key]) => Number(key) < 7)
                    .map(([key, value], index) => (
                        <div className={styles.row} key={index}>
                            <span className={styles.key}>{key}</span>
                            <div
                                className={styles.column}
                                style={{
                                    width: `${(value / maxGuessCount) * 100}%`,
                                }}
                            >
                                <span>{value}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Statistics;

interface IGuessData {
    [key: string]: number;
}

const initialGuessData = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
};
