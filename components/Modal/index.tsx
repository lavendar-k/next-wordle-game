import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import CloseIcon from '../../shared/icons/CloseIcon';
import styles from './Modal.module.scss';

const Modal = ({ open, onClose, children }: PropsWithChildren<IProps>) => {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <div className={styles.modalOverlay} onClick={onClose} />
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={styles.modal}
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
