const {strictEqual} = require("assert");

//Function that reverses a string
const reverseWord = (text) => {
    if (!text) {
        return '';
    } else {
        const splitOne = text.split('').reverse();
        return splitOne.join('');
    }
}

/**Function to split a sentence and return reversed
 * version of each word. Words maintain their original order.
 * @param text
 * @returns {string}
 */
const backwardStringByWord = text => {
    let newText = '';
    if (!text) {
        return ''
    } else {
        const temp = text.split(' ');
        for (let i = 0; i < temp.length; i++) {
            newText += `${reverseWord(temp[i])} `;
        }
    }
    return newText.trim();
}
console.log(backwardStringByWord('Hello World'));
console.log(backwardStringByWord("") === '');

// console.log('Example:');
// console.log(backwardStringByWord(''));
//
// // These "asserts" are used for self-checking
strictEqual(backwardStringByWord(''), '');
strictEqual(backwardStringByWord('world'), 'dlrow');
strictEqual(backwardStringByWord('hello world'), 'olleh dlrow');
strictEqual(backwardStringByWord('hello   world'), 'olleh   dlrow');
strictEqual(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');

// console.log("Coding complete? Click 'Check' to earn cool rewards!");
