import { answers } from '../constants/answers';

const getRandomNumber = () => {
    const oneDayInMs = 1000 * 60 * 60 * 24;
    const currentTimeInMs = new Date().getTime();
    const timeInDays = Math.floor(currentTimeInMs / oneDayInMs);
    const multipliedTimeInDays = timeInDays * timeInDays;
    const numberForToday = multipliedTimeInDays % answers.length;
    return numberForToday;
};

export default getRandomNumber;
