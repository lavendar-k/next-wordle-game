import { createContext, useContext, useState } from 'react';
import styles from './Alert.module.scss';

const AlertContext = createContext<IAlertContext>({
    setAlert: () => null,
    displayAlert: () => null,
});

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }: IProps) => {
    const [alert, setAlert] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const displayAlert = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };

    return (
        <AlertContext.Provider
            value={{
                setAlert,
                displayAlert,
            }}
        >
            {isVisible && (
                <div className={styles.modal}>
                    <span>{alert}</span>
                </div>
            )}
            {children}
        </AlertContext.Provider>
    );
};

interface IProps {
    children: React.ReactNode;
}

interface IAlertContext {
    setAlert: (text: string) => void;
    displayAlert: () => void;
}
