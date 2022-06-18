const assert = require("assert");

function betweenMarkers(line, left, right) {
    // your code here
    return '';
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

// These "asserts" are used for self-checking
assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.equal(betweenMarkers('What is ><', '>', '<'), '');
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding complete? Click 'Check' to earn cool rewards!");