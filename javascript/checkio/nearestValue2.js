const assert = require("assert");

/** @param {Array} values
 * @param {Number} search
 * @return {Number} Array value closest to search value
 */
function nearestValue(values, search){
    let minDiff = [];
    let closestNum = [];
    for (let i = 0; i < values.length; i++){
        if (minDiff.length === 0 || Math.abs(Math.abs(values[i]) - Math.abs(search)) <= minDiff[minDiff.length-1]){
            minDiff.push(Math.abs(Math.abs(values[i]) - Math.abs(search)));
            //closestNum.pop();
            closestNum.push(values[i]);
        }
    }
    return Math.min(...closestNum);
}

// console.log('Example:');
// console.log(nearestValue([0,-2], -1));

// These "asserts" are used for self-checking
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
// assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
// assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
// assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
// assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");