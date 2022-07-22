import clsx from 'clsx';
import { useTheme } from '../../contexts/Theme';
import { ThemeType } from '../constants/enums';
import styles from './Icons.module.scss';

const MenuIcon = () => {
    const { theme } = useTheme();
    return (
        <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.172974"
                width="20"
                height="3"
                rx="1.5"
                fill={clsx({
                    [styles.color]: theme === ThemeType.Light,
                    [styles.colorDark]: theme === ThemeType.Dark,
                })}
            />
            <rect
                x="0.172974"
                y="7"
                width="20"
                height="3"
                rx="1.5"
                fill={clsx({
                    [styles.color]: theme === ThemeType.Light,
                    [styles.colorDark]: theme === ThemeType.Dark,
                })}
            />
            <rect
                x="0.172974"
                y="14"
                width="20"
                height="3"
                rx="1.5"
                fill={clsx({
                    [styles.color]: theme === ThemeType.Light,
                    [styles.colorDark]: theme === ThemeType.Dark,
                })}
            />
        </svg>
    );
};

export default MenuIcon;
