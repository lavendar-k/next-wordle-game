import type { NextPage } from 'next';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Navbar from '../components/Navbar';
import { GameDataProvider } from '../contexts/GameData';
import { AlertTextProvider } from '../contexts/AlertText';
import { ModalProvider } from '../contexts/Modal';

const Home: NextPage = () => {
    return (
        <GameDataProvider>
            <ModalProvider>
                <AlertTextProvider>
                    <Navbar />
                    <Board />
                    <Keyboard />
                </AlertTextProvider>
            </ModalProvider>
        </GameDataProvider>
    );
};

export default Home;
