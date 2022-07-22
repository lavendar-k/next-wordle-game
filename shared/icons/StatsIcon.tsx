import clsx from 'clsx';
import { useTheme } from '../../contexts/Theme';
import { ThemeType } from '../constants/enums';
import styles from './Icons.module.scss';

const StatsIcon = () => {
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
                d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
            />
        </svg>
    );
};

export default StatsIcon;
