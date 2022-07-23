import * as assert from "assert";

/**
 *  Split a given array into two arrays. If it has an odd amount of elements,
 *  then the first array should have more elements.
 *  If it has no elements, then two empty arrays should be returned.
 *  @param {array} values An array to evenly split
 *  @returns {array} array containing two arrays.
 **/
function splitList(values) {
  let newArray = [];
  let valuesLength = values.length;
  let midIndex = Math.floor(values.length / 2);
  if (values.length <= 1) {
    newArray.push(values, []);
  } else {
    valuesLength % 2 === 0
      ? newArray.push(values.slice(0, midIndex), values.slice(midIndex))
      : newArray.push(
          values.slice(0, midIndex + 1),
          values.slice(midIndex + 1)
        );
  }
  return newArray;
}
// module.exports = splitList;
// console.log('Example:');
// console.log(splitList([1, 2, 3, 4, 5, 6, 7]));
// console.log(splitList([1]));
//
// // These "asserts" are used for self-checking
assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [
  [1, 2, 3],
  [4, 5, 6],
]);
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [
  [1, 2, 3],
  [4, 5],
]);
assert.deepEqual(splitList([1]), [[1], []]);
assert.deepEqual(splitList([]), [[], []]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
