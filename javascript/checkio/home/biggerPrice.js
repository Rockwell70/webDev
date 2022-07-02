const {deepEqual} = require("assert");


function biggerPrice(limit, data) {
    let priceHolder = [];
    let total = 0;
    data.forEach(item => priceHolder.push(item['price']));
    priceHolder.sort();
    priceHolder.reverse();
    return Math.max(...priceHolder);

}

console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))

// assert.deepEqual(biggerPrice(2, [
//     {"name": "bread", "price": 100},
//     {"name": "wine", "price": 138},
//     {"name": "meat", "price": 15},
//     {"name": "water", "price": 1}
// ]), [
//     {"name": "wine", "price": 138},
//     {"name": "bread", "price": 100}
// ])
// assert.deepEqual(biggerPrice(1, [
//     {"name": "pen", "price": 5},
//     {"name": "whiteboard", "price": 170}
// ]), [{"name": "whiteboard", "price": 170}])
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");