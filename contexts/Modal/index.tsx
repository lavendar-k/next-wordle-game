import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, Dispatch, useContext, useState } from 'react';
import CloseIcon from '../../shared/icons/CloseIcon';
import styles from './Modal.module.scss';

const ModalContext = createContext<IModalContext>({
    setModalContent: () => null,
    displayModal: () => null,
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: IProps) => {
    const [content, setContent] = useState<React.ReactNode>();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const displayModal = () => {
        setIsVisible(true);
    };

    return (
        <ModalContext.Provider
            value={{
                setModalContent: setContent,
                displayModal,
            }}
        >
            <AnimatePresence>
                {isVisible && (
                    <>
                        <div
                            className={styles.modalOverlay}
                            onClick={() => setIsVisible(false)}
                        />
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={styles.modal}
                        >
                            <div
                                className={styles.modalCloseIcon}
                                onClick={() => setIsVisible(false)}
                            >
                                <CloseIcon />
                            </div>
                            {content}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            {children}
        </ModalContext.Provider>
    );
};

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
    children: React.ReactNode;
}

interface IModalContext {
    setModalContent: Dispatch<React.SetStateAction<React.ReactNode>>;
    displayModal: () => void;
}
