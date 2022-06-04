const newNumbers = [1, 3, 5, 7]

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log(`The value of accumulator is: ${accumulator}`);
    console.log(`The value of currentValue is: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(newSum / newNumbers.length);