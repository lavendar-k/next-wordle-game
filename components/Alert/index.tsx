import clsx from 'clsx';
import { useEffect } from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './Alert.module.scss';

export const Alert = ({ open, onClose, autoHideDuration, message }: IProps) => {
    const { theme } = useTheme();

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
                <div className={clsx(styles.alert, styles[theme])}>
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
