import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useTheme } from '../../contexts/Theme';
import { ThemeType } from '../../shared/constants/enums';
import CloseIcon from '../../shared/icons/CloseIcon';
import styles from './Modal.module.scss';

const Modal = ({ open, onClose, children }: PropsWithChildren<IProps>) => {
    const { theme } = useTheme();
    return (
        <AnimatePresence>
            {open && (
                <>
                    <div
                        className={clsx({
                            [styles.modalOverlay]: true,
                            [styles.modalOverlayDark]: theme === ThemeType.Dark,
                        })}
                        onClick={onClose}
                    />
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={clsx({
                            [styles.modal]: true,
                            [styles.modalDark]: theme === ThemeType.Dark,
                        })}
                    >
                        <div
                            className={styles.modalCloseIcon}
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

export default Modal;

const variants = {
    hidden: {
        opacity: 0,
        y: 'calc(-50% + 48px)',
        x: '-50%',
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        },
    },
    visible: {
        opacity: 1,
        y: '-50%',
        x: '-50%',
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
