import type { NextPage } from 'next';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Navbar from '../components/Navbar';
import { DataProvider } from '../contexts/Data';

const Home: NextPage = () => {
    return (
        <DataProvider>
            <Navbar />
            <Board />
            <Keyboard />
        </DataProvider>
    );
};

export default Home;
