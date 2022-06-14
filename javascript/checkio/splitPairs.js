const assert = require("assert");

/** @param {string} text */
function splitPairs(text) {
    let result = [];
    //if text length is odd append "_" to the end
    text.length  % 2 !== 0 ?
        text = text.concat('_') :
        text
    for (let i = 0; i < text.length; i +=2)
        result.push(text.substring(i, i + 2))
    return result

}
console.log(splitPairs('abcdg'));
// console.log('Example:');
console.log(splitPairs('abcd'));

// // These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);
//
console.log("Coding complete? Click 'Check' to earn cool rewards!");