import { keyState } from './enums';

export interface IGameData {
    date: string;
    board: string[];
    keyStates: { [key: string]: keyState };
    boardStates: keyState[][];
}

export interface IStatistics {
    [date: string]: number;
}
