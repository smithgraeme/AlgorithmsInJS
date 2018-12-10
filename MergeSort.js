log('\nMERGE SORT - A VERY TALKATIVE IMPLEMENTATION');

function mergeSort(inputArray, statistics){
    log(`\nSTART FUNCTION CALL. Input: [${inputArray}]`)
    statistics.executionCount++;
    statistics.operationCount++;

    //check if base case
    const length = inputArray.length

    if (length==0 || length==1) {
        log(`Base case, returning: ${inputArray}`)
        return inputArray;
    }

    log(`Length: ${length}`)

    //split in two smaller problems
    const midPoint = Math.floor(length / 2)

    var part1 = inputArray.slice(0,midPoint)
    var part2 = inputArray.slice((midPoint),length)

    log(`Split part 1: [${part1.toString()}]`);
    log(`Split part 2: [${part2.toString()}]`);
    
    //solve the smaller problems recursively
    log('Making recursive calls...');
    part1 = mergeSort(part1, statistics)
    part2 = mergeSort(part2, statistics)

    //merge and return results
    log(`\nMerging [${part1.toString()}] [${part2.toString()}]`);

    var pointer1 = 0;
    var pointer2 = 0;
    for (let index = 0; index < length; index++) {
        log(`Calculating output value for index ${index}...`);
        statistics.operationCount++;

        if (part1[pointer1] > part2[pointer2] || part1[pointer1]===undefined) {
            inputArray[index] = part2[pointer2]
            pointer2++
        } else {
            inputArray[index] = part1[pointer1]
            pointer1++
        }
    }

    log(`END FUNCTION CALL. Return: ${inputArray.toString()}`);
    
    return inputArray
}

var arrayToSort = [];
var size = 100;

for (let index = 0; index < size; index++) {
    arrayToSort.push(Math.floor(Math.random() * Math.floor(999)));
}

var statistics = {
    executionCount: 0,
    operationCount: 0,
    arrayLength: arrayToSort.length
}
const sortedArray = mergeSort(arrayToSort,statistics);

log(`\nDone. Result: ${sortedArray}`);

console.log(`\nstatistics: ${JSON.stringify(statistics,null,2)}`)

function log(input) {
    console.log(input);
}
