import * as assert from "assert";

/**
 *  Sorting an array order by frequency of occurence in javascript
 *  @param {array} items An array to sort
 *  @returns {array} array of item order by frequency
 **/
function frequencySort(items) {
  let frequency = {},
    sortAble = [],
    newArr = [];
  items.forEach((item) => {
    frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
  });

  if (items.length <= 1 || new Set(items).size === items.length) {
    return items;
    // } else if (new Set(items).size === items.length) {
    //   return items;
  } else {
    for (let key in frequency) {
      sortAble.push([key, frequency[key]]);
    }

    // sortAble.sort(function (a, b) {
    //   return b[0] - a[0];
    // });

    sortAble.sort(function (a, b) {
      return b[1] - a[1];
    });

    sortAble.forEach(function (obj) {
      for (let i = 0; i < obj[1]; i++) {
        obj[0].match(/\d/g)
          ? newArr.push(parseInt(obj[0]))
          : newArr.push(obj[0]);
      }
    });
    return newArr;
  }
}
// console.log(frequencySort([]))
//console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]))
//module.exports = frequencySort;

// console.log('Example:');
// console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
//
// // These "asserts" are used for self-checking and not for an auto-testing
assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepEqual(frequencySort([]), []);
assert.deepEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");