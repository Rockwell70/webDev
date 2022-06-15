const assert = require("assert");

/** @param {string} text
 * @return {number} Number of leading zeros in text.
 */

function beginningZeros(text){
    //test text is null
    if (! text) {
        return 0
    }
    let test = text.split('');
    let count = 0;
    for (let i = 0; i < test.length; i++)
        if (test[i] === '0') {
            count += 1
        } else {
            break;
        }
    return count;
}

console.log('Example:');
console.log(beginningZeros('000000000000100'));

// These "asserts" are used for self-checking
assert.equal(beginningZeros('100'), 0);
assert.equal(beginningZeros('001'), 2);
assert.equal(beginningZeros('100100'), 0);
assert.equal(beginningZeros('001001'), 2);
assert.equal(beginningZeros('012345679'), 1);
assert.equal(beginningZeros('0000'), 4);

console.log("Coding complete? Click 'Check' to earn cool rewards!");