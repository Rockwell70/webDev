// import assert from "node:assert";

const isAllUpper = (text) =>{
    if (! text) {
        return true;
    } else {
        return text.toUpperCase() === text;
    }

};


console.log('Example:');
console.log(isAllUpper('all lower'));

// // These "asserts" are used for self-checking
console.assert(isAllUpper('ALL UPPER') === true, 'Error');
console.assert(isAllUpper('all lower') === false, 'Error');
console.assert(isAllUpper('ALL mixed') === false);
console.assert(isAllUpper('') === true);
// assert.equal(isAllUpper('ALL UPPER'), true);
// assert.equal(isAllUpper('all lower'), false);
// assert.equal(isAllUpper('mixed UPPER and lower'), false);
// assert.equal(isAllUpper(''), true);

// console.log("Coding complete? Click 'Check' to earn cool rewards!");