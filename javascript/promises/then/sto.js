const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const _log = (message) => {
    console.log(message);
}
// Write your code below:
const handleSuccess = (resolvedValue) => {
    _log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    _log(rejectionReason);
};

checkInventory(order).then(handleSuccess, handleFailure);