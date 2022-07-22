import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react';
import { ThemeType } from '../../shared/constants/enums';
import useLocalStorage from '../../shared/hooks/useLocalStorage';

const ThemeContext = createContext<IThemeContext>({
    theme: ThemeType.Light,
    setTheme: () => null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: IProps) => {
    const [theme, setTheme] = useState<ThemeType>(ThemeType.Light);

    const [storageTheme, setStorageTheme] = useLocalStorage<ThemeType>(
        'theme',
        ThemeType.Light
    );

    useEffect(() => {
        setTheme(storageTheme);
    }, []);

    useEffect(() => {
        setStorageTheme(theme);
        const html = document.querySelector('html');
        if (!html) return;
        html.style.colorScheme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

interface IProps {
    children: ReactNode;
}

interface IThemeContext {
    theme: ThemeType;
    setTheme: Dispatch<SetStateAction<ThemeType>>;
}
