import clsx from 'clsx';
import { keys, keyState } from '../../shared/constants/enums';
import BackspaceIcon from '../../shared/icons/BackspaceIcon';
import styles from './Keyboard.module.scss';

const Key = ({ content, handleKeyInput, state }: IProps) => {
    return (
        <div
            className={clsx({
                [styles.key]: true,
                [styles.keyLarge]: [keys.Enter, keys.Backspace].includes(
                    content
                ),
                [styles.keyCorrect]: state === keyState.Correct,
                [styles.keyPresent]: state === keyState.Present,
                [styles.keyAbsent]: state === keyState.Absent,
            })}
            onClick={() => state !== keyState.Absent && handleKeyInput(content)}
        >
            <span>
                {content === keys.Backspace ? (
                    <BackspaceIcon />
                ) : (
                    content.toUpperCase()
                )}
            </span>
        </div>
    );
};

export default Key;

interface IProps {
    content: keys;
    handleKeyInput: (key: keys) => void;
    state: keyState;
}
