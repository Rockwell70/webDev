//import * as assert from "assert";

/**
 *  Sorting an array order by frequency of occurence in javascript
 *  @param {array} items An array to sort
 *  @returns {array} array of item order by frequency
 **/
function frequencySort(items) {
  let frequency = {}
  let newArr = []
  let arrSet = new Set()
  const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  items.forEach((num) =>{
    arrSet.add(num.toString(10));
  })


  items.forEach((item) => {
    frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
  })

  arrSet.forEach((num) => {
    for (let i = 0; i < frequency[num]; i++) {
      strNums.includes(num) ?
        newArr.push(parseInt(num)) :
        newArr.push(num);
    }
  })

  if (items.length <= 1 || arrSet.size === items.length) {
    return items;
  } else {
    return newArr;
  }
}

//console.log(frequencySort([]))
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]))
//console.log(frequencySort([17, 99, 42]))
//module.exports = frequencySort;

// console.log('Example:');
//console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));

// These "asserts" are used for self-checking and not for an auto-testing
// assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
// assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
// assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
// assert.deepEqual(frequencySort([]), []);
// assert.deepEqual(frequencySort([1]), [1]);

// console.log("Coding complete? Click 'Check' to earn cool rewards!");