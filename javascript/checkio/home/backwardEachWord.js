

function backwardStringByWord(text) {
    const temp = text.split(' ');
    let newHolder = [];
    let newText = '';
    for (let i = 0; i < temp.length; i++){
        for (let j = temp[i].length-1; j >= 0; j--) {
            newText += temp[i][j];
        }
        newHolder.push(`${newText} `);
    }

    return newHolder;
}
console.log(backwardStringByWord('This is a Bame'));

// console.log('Example:');
// console.log(backwardStringByWord(''));
//
// // These "asserts" are used for self-checking
// assert.equal(backwardStringByWord(''), '');
// assert.equal(backwardStringByWord('world'), 'dlrow');
// assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
// assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
// assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');

// console.log("Coding complete? Click 'Check' to earn cool rewards!");
