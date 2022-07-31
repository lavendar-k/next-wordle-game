import type { NextPage } from 'next';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import { useTheme } from '../contexts/Theme';

const Home: NextPage = () => {
    const { theme } = useTheme();
    return (
        <>
            <Meta />
            <div className={theme}>
                <Navbar />
                <Board />
                <Keyboard />
            </div>
        </>
    );
};

export default Home;
