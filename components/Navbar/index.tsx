import HelpIcon from '../../shared/icons/HelpIcon';
import MenuIcon from '../../shared/icons/MenuIcon';
import SettingsIcon from '../../shared/icons/SettingsIcon';
import StatsIcon from '../../shared/icons/StatsIcon';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.icon}>
                    <MenuIcon />
                </div>
                <div className={styles.icon}>
                    <HelpIcon />
                </div>
            </div>
            <span>Nextle</span>
            <div className={styles.right}>
                <div className={styles.icon}>
                    <StatsIcon />
                </div>
                <div className={styles.icon}>
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
