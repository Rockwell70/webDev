const guests = ['WIlliam', 'Sammy', 'Skip'];

guests.forEach(guest =>{
  console.log(`My guest is ${guest}`)
})

//map
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
});

console.log(smallNumbers);

//filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallerNumbers = randomNumbers.filter(num => {
  return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
//findIndex
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey',
  'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);
console.log(animals2[foundAnimal]);

//reduce
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator is: ${accumulator}`);
  console.log(`The value of currentValue is: ${currentValue}`);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);