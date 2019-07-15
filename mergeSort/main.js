const assert = require('assert')
const mergeSort = require('./MergeSort')

log = input => console.log(input)

const size = 1000
const inputArray = Array(size).fill(0).map(() => Math.floor((Math.random() - 0.5) * 10000))
const expectedOutput = inputArray.slice().sort(function(a, b){return a-b})

mergeSort(inputArray)

assert(inputArray.toString() == expectedOutput.toString())
log(`\nResult:\n${inputArray}\n\nExpected:\n${expectedOutput}`)