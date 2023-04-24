import clsx from 'clsx';
import { useTheme } from '../../../contexts/Theme';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx(styles.sidebar, styles[theme])}>
            <div className={clsx(styles.row, styles.header)}>
                <img
                    style={{
                        width: '4rem',
                        height: '4rem',
                    }}
                    src="/icons/oscaryang-k-icon.png"
                    alt="oscaryang-k-icon"
                />
                <h1>Contact</h1>
            </div>
            <div className={styles.row}>
                <h2>Social Media Profiles</h2>
            </div>
            <a
                href="https://oscaryang.netlify.app"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/safari-icon.png" alt="portfolio-icon" />
                    <span>Oscar Yang Portfolio</span>
                </div>
            </a>
            <a
                href="https://github.com/oscaryang-k/"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/github-icon.png" alt="github-icon" />
                    <span>/oscaryang-k</span>
                </div>
            </a>
            <a
                href="https://www.linkedin.com/in/oscaryang-k/"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
                    <span>/oscaryang-k</span>
                </div>
            </a>
            <a
                href="mailto:oscaryang1220@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <div className={clsx(styles.row, styles.social)}>
                    <img src="/icons/email-icon.png" alt="email-icon" />
                    <span>oscaryang1220@gmail.com</span>
                </div>
            </a>
            <span className={styles.footer}>
                Developed by Oscar Yang © 2023
            </span>
        </div>
    );
};

export default Sidebar;
