const assert = require('assert')
log = input => console.log(input);

quickSort = inputArray => qsInternal(inputArray, 0, inputArray.length - 1)

qsInternal = (array, left, right) => {
    if (left < right){
        //divide into two subproblems
        const pivot = partition(array, left, right);

        //conquer each subproblem
        qsInternal(array, left, pivot - 1)
        qsInternal(array, pivot + 1, right)
    }
}

partition = (array, left, right) => {
    var rightPartition = left

    for (let ptr = left; ptr < right; ptr++){
        if (array[ptr] <= array[right]) {

            //if the unprocessed element is small, move it to the right edge of the left partition
            rightPartition++;
            swap(array, ptr, rightPartition - 1);
        }

        //otherwise, just move pointer so the element falls into the right partition
    }

    //move the pivot to the middle
    //by placing it at the left element of the right partition
    swap(array, right, rightPartition)

    return rightPartition
}

swap = (array, first, second) => {
    const temp = array[first]
    array[first] = array[second]
    array[second] = temp
}

const inputArray = [];
const size = 10;

for (let i = 0; i < size; i++) {
    inputArray.push(Math.floor(Math.random() * Math.floor(999)));
}

const expected = inputArray.slice().sort(function(a, b){return a-b})

quickSort(inputArray);

assert(inputArray.toString() == expected.toString())

log(`\nDone.\nResult: ${inputArray} \nExpected: ${expected}`);