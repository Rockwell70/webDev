const assert = require("assert");

function correctSentence(text) {
    let begin = text[0].toUpperCase();
    return text[text.length-1] === '.'?
        begin.concat(text.slice(1), '') :
        begin.concat(text.slice(1), '.');

}

console.log('Example:');
console.log(correctSentence('greetings, friends'));

// These "asserts" are used for self-checking
assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');

console.log("Coding complete? Click 'Check' to earn cool rewards!");