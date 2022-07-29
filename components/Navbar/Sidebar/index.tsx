import clsx from 'clsx';
import { useTheme } from '../../../contexts/Theme';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx(styles.sidebar, styles[theme])}>
            <div className={clsx(styles.row, styles.header)}>
                <img src="/icons/burkayanduv-icon.png" alt="burkayanduv-icon" />
                <h1>Contact</h1>
            </div>
            <div className={styles.row}>
                <h2>Social Media Profiles</h2>
            </div>
            <a href="https://burkayanduv.com/" target="_blank" rel="noreferrer">
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/safari-icon.png" alt="portfolio-icon" />
                    <span>burkayanduv.com</span>
                </div>
            </a>
            <a
                href="https://github.com/burkayanduv/"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/github-icon.png" alt="github-icon" />
                    <span>/burkayanduv</span>
                </div>
            </a>
            <a
                href="https://www.linkedin.com/in/burkayanduv/"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
                    <span>/burkayanduv</span>
                </div>
            </a>
            <a
                href="mailto:burkayanduv@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/email-icon.png" alt="email-icon" />
                    <span>burkayanduv@gmail.com</span>
                </div>
            </a>
            <span className={styles.footer}>
                Developed by Burkay Anduv © 2020
            </span>
        </div>
    );
};

export default Sidebar;
