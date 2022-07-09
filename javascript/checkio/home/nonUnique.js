import deepEqual from "assert";

function nonUniqueElements(data) {
    return [...new Set(data)];
}

console.log('Example:');
console.log(nonUniqueElements([1, 2, 3, 1, 3]))
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]))

deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");