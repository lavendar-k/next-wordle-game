import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { useTheme } from '../../contexts/Theme';
import HelpIcon from '../../shared/icons/HelpIcon';
import MenuIcon from '../../shared/icons/MenuIcon';
import SettingsIcon from '../../shared/icons/SettingsIcon';
import StatsIcon from '../../shared/icons/StatsIcon';
import Drawer from '../Drawer';
import Modal from '../Modal';
import HowToPlay from './HowToPlay';
import styles from './Navbar.module.scss';
import Settings from './Settings';
import Sidebar from './Sidebar';
import Statistics from './Statistics';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);

    const { theme } = useTheme();

    return (
        <>
            <div className={clsx(styles.navbar, styles[theme])}>
                <div className={styles.left}>
                    <div
                        className={styles.icon}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </div>
                    <div
                        className={styles.icon}
                        onClick={() => {
                            setModalContent(<HowToPlay />);
                            setIsModalOpen(true);
                        }}
                    >
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
                    <div
                        className={styles.icon}
                        onClick={() => {
                            setModalContent(<Settings />);
                            setIsModalOpen(true);
                        }}
                    >
                        <SettingsIcon />
                    </div>
                </div>
            </div>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {modalContent}
            </Modal>
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Sidebar />
            </Drawer>
        </>
    );
};

export default Navbar;
