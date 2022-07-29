import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useTheme } from '../../contexts/Theme';
import { ThemeType } from '../../shared/constants/enums';
import CloseIcon from '../../shared/icons/CloseIcon';
import styles from './Drawer.module.scss';

const Drawer = ({ open, onClose, children }: PropsWithChildren<IProps>) => {
    const { theme } = useTheme();
    return (
        <AnimatePresence>
            {open && (
                <>
                    <div
                        className={clsx({
                            [styles.drawerOverlay]: true,
                            [styles.drawerOverlayDark]:
                                theme === ThemeType.Dark,
                        })}
                        onClick={onClose}
                    />
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={clsx({
                            [styles.drawer]: true,
                            [styles.drawerDark]: theme === ThemeType.Dark,
                        })}
                    >
                        <div
                            className={styles.drawerCloseIcon}
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </div>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Drawer;

const variants = {
    hidden: {
        opacity: 0,
        x: 'min(-375px, 100%)',
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        },
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        },
    },
};

interface IProps {
    open: boolean;
    onClose: () => void;
}
