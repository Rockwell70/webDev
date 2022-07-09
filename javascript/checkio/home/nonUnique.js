import deepEqual from "assert";

function nonUniqueElements(data) {
  const counts = {};
  let val_sum = 0;
  const uniques = new Set(data).size;
  for (const num of data) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (const [key, value] of Object.entries(counts)) {
    // console.log(`Key: ${typeof(key)} value ${typeof(value)}`)
    val_sum += value;
  }

  // console.log(`Keys: ${uniques} vals sum ${val_sum}`)

  if (val_sum === uniques) {
    return [];
  } else {
    for (const num of data) {
      if (counts[num] === 1) {
        data.splice(data.indexOf(num), 1);
      }
    }
  }
  return data;
}

console.log("Example:");
console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
//
// deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
// deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
// deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
// deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
console.log(
  "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
);
