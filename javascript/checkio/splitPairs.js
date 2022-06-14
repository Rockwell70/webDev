//TODO: use substring & concat

function splitPairs(text) {
    let result = [];
    if (text.length % 2 !== 0) {
        text = text.concat('_');
    }
    return text

}
console.log(splitPairs('abcdg'));
// console.log('Example:');
// console.log(splitPairs('abcd'));
//
// // These "asserts" are used for self-checking
// assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
// assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
// assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
// assert.deepEqual(splitPairs('a'), ['a_']);
// assert.deepEqual(splitPairs(''), []);
//
// console.log("Coding complete? Click 'Check' to earn cool rewards!");