import { useEffect } from 'react';
import styles from './Alert.module.scss';

export const Alert = ({ open, onClose, autoHideDuration, message }: IProps) => {
    useEffect(() => {
        if (open) {
            setTimeout(() => {
                onClose();
            }, autoHideDuration || 2000);
        }
    }, [open]);

    return (
        <>
            {open && (
                <div className={styles.alert}>
                    <span>{message}</span>
                </div>
            )}
        </>
    );
};

interface IProps {
    open: boolean;
    onClose: () => void;
    message: string;
    autoHideDuration?: number;
}
