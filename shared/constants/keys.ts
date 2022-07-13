import { keyState } from './enums';

const keysLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

const keysArray = keysLayout.flat();

const initialKeyStates: { [key: string]: keyState } = {};
keysArray.forEach(key => (initialKeyStates[key] = keyState.Base));

const initialBoardStates: keyState[][] = [...Array(6)].map(() =>
    [...Array(5)].map(() => keyState.Base)
);

export { keysLayout, keysArray, initialKeyStates, initialBoardStates };
