import clsx from 'clsx';
import { useState } from 'react';
import { useTheme } from '../../../../contexts/Theme';
import styles from './SwitchButton.module.scss';

const SwitchButton = ({ defaultChecked, onClick }: IProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(
        defaultChecked || false
    );

    const { theme } = useTheme();

    return (
        <button
            aria-checked={isChecked}
            className={clsx(styles.switch, styles[theme])}
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
    defaultChecked?: boolean;
    onClick: () => void;
}
