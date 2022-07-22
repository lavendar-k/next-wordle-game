import clsx from 'clsx';
import { useTheme } from '../../contexts/Theme';
import { ThemeType } from '../constants/enums';
import styles from './Icons.module.scss';

const CloseIcon = () => {
    const { theme } = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <path
                fill={clsx({
                    [styles.color]: theme === ThemeType.Light,
                    [styles.colorDark]: theme === ThemeType.Dark,
                })}
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
        </svg>
    );
};

export default CloseIcon;
