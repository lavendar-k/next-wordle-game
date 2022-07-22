import type { AppProps } from 'next/app';
import { DataProvider } from '../contexts/Data';
import { ThemeProvider } from '../contexts/Theme';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <DataProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </DataProvider>
    );
};

export default MyApp;
