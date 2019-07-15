module.exports = array => mergeSort(array, 0, array.length - 1)

mergeSort = (array, left, right) => {
    //if (right == left) return //recursion base case

    if (right > left){
        //divide into two subproblems
        const midPoint = Math.floor((right + left) / 2)
        // console.log(`midPoint: ${midPoint}, left: ${left}, right: ${right}`)

        mergeSort(array, left, midPoint)
        mergeSort(array, midPoint + 1, right)

        //merge subproblems (sorted halves of array)
        merge(array, midPoint, left, right)
    }
}

merge = (array, midPoint, left, right) => {
    // console.log(`Merging. midPoint: ${midPoint}, left: ${left}, right: ${right}`)

    //stash each half of array
    //left bound is inclusive, right bound is exclusive
    const tempLeft = array.slice(left, midPoint + 1)
    const tempRight = array.slice(midPoint + 1, right + 1)

    //merge halves back into main array in order
    var l = 0
    var r = 0
    var mainArrayPointer = left

    while (l < tempLeft.length && r < tempRight.length){
        if (tempLeft[l] < tempRight[r]){
            // console.log("Merging in left")
            array[mainArrayPointer] = tempLeft[l]
            l++
        } else {
            // console.log("Merging in right")
            array[mainArrayPointer] = tempRight[r]
            r++
        }

        mainArrayPointer++
    }

    // console.log(array.toString())

    while (l < tempLeft.length){
        array[mainArrayPointer] = tempLeft[l]
        l++
        mainArrayPointer++
    }

    while (r < tempRight.length){
        array[mainArrayPointer] = tempRight[r]
        r++
        mainArrayPointer++
    }
}