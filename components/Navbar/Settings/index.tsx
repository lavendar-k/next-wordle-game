import SwitchButton from '../../SwitchButton';
import styles from './Settings.module.scss';

const Settings = () => {
    const handleDarkModeSwitch = () => {
        console.log('Dark mode switch clicked');
    };

    return (
        <div className={styles.settings}>
            <h1 style={{ marginTop: 0 }}>Settings</h1>
            <div className={styles.rows}>
                <div className={styles.setting}>
                    <div className={styles.text}>
                        <span className={styles.title}>Dark Theme</span>
                    </div>
                    <SwitchButton onClick={handleDarkModeSwitch} />
                </div>
                <div className={styles.setting}>
                    <div className={styles.text}>
                        <span className={styles.title}>Feedback</span>
                    </div>
                    <a href="mailto:burkayanduv@gmail.com">Email</a>
                </div>
                <div className={styles.setting}>
                    <div className={styles.text}>
                        <span className={styles.title}>Community</span>
                    </div>
                    <a
                        href="https://burkayanduv.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </div>
                <div className={styles.setting}>
                    <div className={styles.text}>
                        <span className={styles.title}>Questions</span>
                    </div>
                    <a
                        href="https://burkayanduv.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        FAQ
                    </a>
                </div>

                <div className={styles.footnote}>
                    <span className={styles.title}>© 2022 Burkay Anduv</span>
                    <span className={styles.title}>v1.00</span>
                </div>
            </div>
        </div>
    );
};

export default Settings;
