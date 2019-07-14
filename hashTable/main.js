const HashTable = require("./hashTableImplementation");
const assert = require('assert');

log('\nHASH TABLES - a very manual implementation');
log("Node.js version: " + process.version + "\n")

var testHash = new HashTable();

for (let i = 1; i < 1000000; i++){
    const key = i
    const value = i*i*i
    testHash.add(key, value)
    const valueRetrieved = testHash.get(key)

    assert(value === valueRetrieved)
}

log("done!")

function log(input) {
    console.log(input);
}
