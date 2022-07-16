//import * as assert from "assert";

function frequencySort(items) {
  let counts = {}
  items.forEach((item) => {
    counts[item] = counts[item] ? counts[item] + 1 :1;
  });
  console.log(counts)
  if (items.length <= 1) {
    return items;
  } else if (new Set(items).size === items.length) {
    return items;

  }
  //return [];
}
console.log(frequencySort([]))
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]))
//module.exports = frequencySort;

// console.log('Example:');
// console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
//
// // These "asserts" are used for self-checking and not for an auto-testing
// assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
// assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
// assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
// assert.deepEqual(frequencySort([]), []);
// assert.deepEqual(frequencySort([1]), [1]);
//
// console.log("Coding complete? Click 'Check' to earn cool rewards!");