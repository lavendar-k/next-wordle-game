import { createContext, useContext, useState } from 'react';
import styles from './AlertText.module.scss';

const AlertTextContext = createContext<IAlertTextContext>({
    setAlertText: () => null,
    displayAlertText: () => null,
});

export const useAlertText = () => useContext(AlertTextContext);

export const AlertTextProvider = ({ children }: IProps) => {
    const [alertText, setAlertText] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const displayAlertText = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };

    return (
        <AlertTextContext.Provider
            value={{
                setAlertText,
                displayAlertText,
            }}
        >
            {isVisible && (
                <div className={styles.modal}>
                    <span>{alertText}</span>
                </div>
            )}
            {children}
        </AlertTextContext.Provider>
    );
};

interface IProps {
    children: React.ReactNode;
}

interface IAlertTextContext {
    setAlertText: (text: string) => void;
    displayAlertText: () => void;
}
