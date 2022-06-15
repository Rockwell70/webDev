const assert = require("assert");

/** @param {Array} values
 * @param {Number} search
 * @return {Number} Array value closest to search value
 */
function nearestValue(values, search){
    let result = {};
    if (values.includes(search)) {
        return search;
    } else if (search < values[0]) {
        return values[0];
    } else {
        for (let i = 0; i < values.length; i++)
            if (Math.abs(values[i] - search) in result) {
                if (result[Math.abs(values[i] - search)] > values[i]){
                    result[Math.abs(values[i] - search)] = values[i];
                }
            } else {
                result[Number(Math.abs(values[i] - search))] = values[i];
            }
    }
    const keys = Object.keys(result).sort();
    return result[keys[0]];
}

console.log('Example:');
console.log(nearestValue([0,-2], -1));

// These "asserts" are used for self-checking
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");