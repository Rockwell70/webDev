import deepEqual from "assert";


function biggerPrice(limit, data) {
    /**Sort data descending by price value
     * then slice result from beginning to limit.
     */
    return data.sort(function (a, b){return b.price - a.price}).slice(0,limit);
}

console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))

console.log(biggerPrice(1, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))

deepEqual(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]), [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
])
deepEqual(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}])
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");