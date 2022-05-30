//determine # of hours of sleep for a night
const getSleepHours = (day, hours) => {
    if (hours) {
        return hours;
    } else {
        switch (day) {
            case 'monday':
                return 9;
            case 'tuesday':
                return 7;
            case 'wednesday':
                return 8.5;
            case 'thursday':
                return 7;
            case 'friday':
                return 6;
            case 'saturday':
                return 9;
            case 'sunday':
                return 7.5
        }
    }
};

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
        getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')
        + getSleepHours('sunday');
}

const getIdealSleepHours = () => {
    return 9 * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`${actualSleepHours}! The perfect amount of sleep!`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`${idealSleepHours - actualSleepHours}. Less than ideal.`);
    } else {
        console.log(`${actualSleepHours - idealSleepHours}! You need to sleep less.`);
    }

};
calculateSleepDebt();