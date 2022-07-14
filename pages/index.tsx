import type { NextPage } from 'next';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Navbar from '../components/Navbar';
import { DataProvider } from '../contexts/Data';
import { AlertProvider } from '../contexts/Alert';
import { ModalProvider } from '../contexts/Modal';

const Home: NextPage = () => {
    return (
        <DataProvider>
            <ModalProvider>
                <AlertProvider>
                    <Navbar />
                    <Board />
                    <Keyboard />
                </AlertProvider>
            </ModalProvider>
        </DataProvider>
    );
};

export default Home;
