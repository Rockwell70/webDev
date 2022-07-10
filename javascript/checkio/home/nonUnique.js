import deepEqual from "assert";

function nonUniqueElements(data) {
    let counts = {};
    let val_sum = [];
    let result = [];
    const equalsOne = (currentValue) => currentValue === 1;
    for (const num of data) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (const [, value] of Object.entries(counts)) {
        val_sum.push(value);
    }
    if (val_sum.every(equalsOne)) {
        return [];
    } else {
        for (const num of data) {
            if (counts[num] !== 1) {
                result.push(num);
            }
        }
    }
    return result;
}

console.log("Example:");
console.log(nonUniqueElements([10, 20, 30, 10]));
console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
//
deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
console.log(
    "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
);
