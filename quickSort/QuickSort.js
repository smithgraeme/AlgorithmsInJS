//Reference: https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/linear-time-partitioning

module.exports = inputArray => quickSort(inputArray, 0, inputArray.length - 1)

quickSort = (array, left, right) => {
    if (left < right){
        //divide into two subproblems
        const pivot = partition(array, left, right)

        //conquer each subproblem
        quickSort(array, left, pivot - 1)
        quickSort(array, pivot + 1, right)
    }

    //otherwise there are less than 2 elements in the subproblem
    //and they are a base case that is already sorted
}

partition = (array, left, right) => {
    //in this implementation the pivot is always the far right most element

    var rightPartition = left

    for (let nextToCompare = left; nextToCompare < right; nextToCompare++){
        if (array[nextToCompare] <= array[right]) {

            //if the unprocessed element is smaller, move it to the right edge of the left partition
            rightPartition++
            swap(array, nextToCompare, rightPartition - 1)
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