import clsx from 'clsx';
import { keyState } from '../../shared/constants/enums';
import styles from './Board.module.scss';
import { motion } from 'framer-motion';

const Tile = ({ letter, state }: IProps) => {
    const variants = {
        initial: {
            rotateX: 90,
        },
        enter: {
            rotateX: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        exit: {
            rotateX: -90,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        inputInitial: {
            scale: 1.1,
        },
        inputEnter: {
            scale: 1,
            transition: {
                duration: 0.1,
                ease: 'easeInOut',
            },
        },
    };

    const setInitial = () => {
        switch (state) {
            case keyState.Base:
                return 'enter';
            case keyState.Input:
                return 'inputInitial';
            default:
                return 'initial';
        }
    };

    const setAnimate = () => {
        switch (state) {
            case keyState.Base:
                return undefined;
            case keyState.Input:
                return 'inputEnter';
            default:
                return 'enter';
        }
    };

    const setExit = () => {
        switch (state) {
            case keyState.Input:
                return undefined;
            default:
                return 'exit';
        }
    };

    return (
        <motion.div
            className={clsx({
                [styles.tile]: true,
                [styles.tileCorrect]: state === keyState.Correct,
                [styles.tilePresent]: state === keyState.Present,
                [styles.tileAbsent]: state === keyState.Absent,
                [styles.tileInput]: state === keyState.Input,
            })}
            variants={variants}
            initial={setInitial()}
            animate={setAnimate()}
            exit={setExit()}
        >
            {letter.toUpperCase()}
        </motion.div>
    );
};

export default Tile;

interface IProps {
    letter: string;
    state: keyState;
}

Tile.defaultProps = {
    letter: '',
    state: keyState.Base,
};
