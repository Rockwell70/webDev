const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

let myPromises = Promise.all([checkSunglasses, checkPants, checkBags]);

myPromises
    .then((onFulfill) => {
        console.log(onFulfill);
    })
    .catch((onReject) => {
        console.log(onReject);
    });
