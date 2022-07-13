import type { NextPage } from 'next';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Navbar from '../components/Navbar';
import { GameDataProvider } from '../contexts/GameData';
import { AlertTextProvider } from '../contexts/AlertText';

const Home: NextPage = () => {
    return (
        <GameDataProvider>
            <AlertTextProvider>
                <Navbar />
                <Board />
                <Keyboard />
            </AlertTextProvider>
        </GameDataProvider>
    );
};

export default Home;
