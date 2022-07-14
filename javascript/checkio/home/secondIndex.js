import * as assert from "assert";

function secondIndex(text, symbol) {
  let indexes = [];
  //let letters = text.split("");

  if (
    !text.includes(symbol) ||
    text.indexOf(symbol) === text.lastIndexOf(symbol)
  ) {
    return undefined;
  } else {
    for (const [index, element] of text.split('').entries())
      if (element === symbol) {
        console.log(element, index);
        indexes.push(index);
      }
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