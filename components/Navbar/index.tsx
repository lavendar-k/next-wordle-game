import { ReactNode, useState } from 'react';
import HelpIcon from '../../shared/icons/HelpIcon';
import MenuIcon from '../../shared/icons/MenuIcon';
import SettingsIcon from '../../shared/icons/SettingsIcon';
import StatsIcon from '../../shared/icons/StatsIcon';
import Modal from '../Modal';
import styles from './Navbar.module.scss';
import Statistics from './Statistics';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);

    return (
        <>
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
                    <div
                        className={styles.icon}
                        onClick={() => {
                            setModalContent(<Statistics />);
                            setIsModalOpen(true);
                        }}
                    >
                        <StatsIcon />
                    </div>
                    <div className={styles.icon}>
                        <SettingsIcon />
                    </div>
                </div>
            </div>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {modalContent}
            </Modal>
        </>
    );
};

export default Navbar;
