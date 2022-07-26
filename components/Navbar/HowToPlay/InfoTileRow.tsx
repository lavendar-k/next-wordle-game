import { AnimatePresence } from 'framer-motion';
import { keyState } from '../../../shared/constants/enums';
import styles from './HowToPlay.module.scss';
import InfoTile from './InfoTile';

const InfoTileRow = ({ word, states }: IProps) => {
    return (
        <div className={styles.tileRow}>
            {word.split('').map((letter, i) => (
                <AnimatePresence key={`prev-${i}`} exitBeforeEnter>
                    <InfoTile
                        key={`prev-${i}-state-${states[i]}`}
                        letter={letter}
                        state={states[i]}
                    />
                </AnimatePresence>
            ))}
        </div>
    );
};

export default InfoTileRow;

interface IProps {
    word: string;
    states: keyState[];
}
