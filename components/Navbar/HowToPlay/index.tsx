import clsx from 'clsx';
import { useTheme } from '../../../contexts/Theme';
import { keyState } from '../../../shared/constants/enums';
import styles from './HowToPlay.module.scss';
import InfoTileRow from './InfoTileRow';

const HowToPlay = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx(styles.howToPlay, styles[theme])}>
            <h1>How To Play</h1>
            <div className={styles.rows}>
                <div className={styles.row}>
                    <p>
                        Guess the <b>WORDLE</b> in six tries.
                        <br />
                        <br />
                        Each guess must be a valid five-letter word. Hit the
                        enter button to submit.
                        <br />
                        <br />
                        After each guess, the color of the tiles will change to
                        show how close your guess was to the word.
                    </p>
                </div>
                <div className={styles.row}>
                    <div>
                        <p>
                            <b>Examples</b>
                        </p>
                        <InfoTileRow
                            word="WEARY"
                            states={[
                                keyState.Correct,
                                keyState.Input,
                                keyState.Input,
                                keyState.Input,
                                keyState.Input,
                            ]}
                        />
                        <p>
                            The letter <b>W</b> is in the word and in the
                            correct spot.
                        </p>
                        <InfoTileRow
                            word="PILLS"
                            states={[
                                keyState.Input,
                                keyState.Present,
                                keyState.Input,
                                keyState.Input,
                                keyState.Input,
                            ]}
                        />
                        <p>
                            The letter <b>I</b> is in the word but in the wrong
                            spot.
                        </p>
                        <InfoTileRow
                            word="VAGUE"
                            states={[
                                keyState.Input,
                                keyState.Input,
                                keyState.Input,
                                keyState.Absent,
                                keyState.Input,
                            ]}
                        />
                        <p>
                            The letter <b>U</b> is not in the word in any spot.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <p>
                        <b>A new WORDLE will be available each day!</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToPlay;
