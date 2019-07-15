const assert = require('assert')
const quickSort = require('./QuickSort')

log = input => console.log(input)

const size = 100
const inputArray = Array(size).fill(0).map(() => Math.floor((Math.random() - 0.5) * 10000))
const expectedOutput = inputArray.slice().sort(function(a, b){return a-b})

quickSort(inputArray)

assert(inputArray.toString() == expectedOutput.toString())
log(`\nResult:\n${inputArray}\n\nExpected:\n${expectedOutput}`)