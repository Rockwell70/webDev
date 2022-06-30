const assert = require("assert");

function countDigits(text) {
  return text.match(/\d/g) ? text.match(/\d/g).length : 0;
}


console.log('Example:');
console.log(countDigits('hi'));
console.log(countDigits('hi 12st'));

// // These "asserts" are used for self-checking
assert.equal(countDigits('hi'), 0);
assert.equal(countDigits('who is 1st here'), 1);
assert.equal(countDigits('my numbers is 2'), 1);
assert.equal(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
assert.equal(countDigits('5 plus 6 is'), 2);
assert.equal(countDigits(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");const assert = require("assert");