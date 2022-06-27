const assert = require("assert");

function threeWords(text){
    /**Test text against regex of 3 groups of letters separated
     * and surrounded by white space.
     */
    return text.match(/\s?([a-zA-z]+)\s([a-zA-z]+)\s([a-zA-z]+)\s?/gm) !== null;
}

console.log('Example:')
console.log(threeWords("Hello World hello"))
console.log(threeWords("Hello World 123 hello"))

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");