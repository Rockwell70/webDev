const assert = require("assert");


/** @param {String} line
 * @param {String} left
 * @param {String} right
 * @return {String} line characters between left and right characters
 */
function betweenMarkers(line, left, right) {
    return line.slice(line.indexOf(left) + 1, line.indexOf(right));
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

// These "asserts" are used for self-checking
assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.equal(betweenMarkers('What is ><', '>', '<'), '');
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding complete? Click 'Check' to earn cool rewards!");