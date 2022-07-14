import * as assert from "assert";

/** @param {string} text String to search
 * @param {string} symbol Char to find
 * @return {Number} Index of 2nd occurrence of symbol
 */
function secondIndex(text, symbol) {
  let indexes = [];
  //check if symbol not in text or occurs only once;
  if (
    !(
      !text.includes(symbol) ||
      text.indexOf(symbol) === text.lastIndexOf(symbol)
    )
  ) {
    /**Split text into a list
     * Use entries() to get the index of each list letter
     * If letter matches symbol append that letter's index to the
     * indexes list.
     */
    for (const [index, letter] of text.split("").entries())
      if (letter === symbol) {
        indexes.push(index);
      }
  } else {
    return undefined;
  }
  return indexes[1];
}

console.log('Example')
console.log(secondIndex("sims", "s"))

// These "asserts" are used for self-checking and not for an auto-testing
assert.equal(secondIndex("sims", "s"), 3)
assert.equal(secondIndex("find the river", "e"), 12)
assert.equal(secondIndex("hi", " "), undefined)
assert.equal(secondIndex("hi mayor", " "), undefined)
assert.equal(secondIndex("hi mr Mayor", " "), 5)
console.log("You are awesome! All tests are done! Go Check it!");