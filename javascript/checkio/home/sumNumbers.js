const assert = require("assert");

function sumNumbers(test){
    let total = 0;
    //match groups of consecutive digits
    const matched = test.match(/([0-9][^a-z])+/g);
    //test of no digits found
    if (! matched) {
        return total;
    } else {
        /**if digits found iterate each string of digits
         * convert the string to a number and add the
         * result to total.
         */
        for (let i = 0; i < matched.length; i++) {
            total += Number(matched[i]);
        }
    }
    return total;
}

console.log('Example:');
console.log(sumNumbers('my numbers is 2'));

// // These "asserts" are used for self-checking
assert.equal(sumNumbers('hi'), 0);
assert.equal(sumNumbers('who is 1st here'), 0);
assert.equal(sumNumbers('my numbers is 2'), 2);
// assert.equal(sumNumbers('This picture is an oil on canvas '
//     + 'painting by Danish artist Anna '
//     + 'Petersen between 1845 and 1910 year'), 3755);
// assert.equal(sumNumbers('5 plus 6 is'), 11);
// assert.equal(sumNumbers(''), 0);
//
// console.log("Coding complete? Click 'Check' to earn cool rewards!");