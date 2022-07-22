import type { NextPage } from 'next';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Navbar from '../components/Navbar';
import { useTheme } from '../contexts/Theme';

const Home: NextPage = () => {
    const { theme } = useTheme();
    return (
        <div className={theme}>
            <Navbar />
            <Board />
            <Keyboard />
        </div>
    );
};

export default Home;
