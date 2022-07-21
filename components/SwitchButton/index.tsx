import { useState } from 'react';
import styles from './SwitchButton.module.scss';

const SwitchButton = ({ onClick }: IProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    return (
        <button
            aria-checked={isChecked}
            className={styles.switch}
            role="switch"
            onClick={() => {
                onClick();
                setIsChecked(prev => !prev);
            }}
        >
            <span className={styles.knob}></span>
        </button>
    );
};

export default SwitchButton;

interface IProps {
    onClick: () => void;
}
