const stringHash = require("string-hash");
const assert = require('assert');

function log(input) {
    //console.log(input);
}

function hashTable(){
    this.bucketKeys = [];
    this.bucketValues = [];
    this.itemCount = 0;
    this.bucketCount = 5;

    this.add = function(key, value){
        assert(value, "No value supplied")

        if (this.getLoadFactor() > 10){
            this.resize(this.bucketCount * 10)
        }

        this.itemCount++

        log(key)

        const hash = this.getHash(key)
        log(hash)

        if (!this.bucketKeys[hash]){ 
            this.bucketKeys[hash] = []
        } else {
            //console.log(key, hash)
        }

        if (!this.bucketValues[hash]){
            this.bucketValues[hash] = []
        }

        this.bucketKeys[hash].push(key)
        this.bucketValues[hash].push(value)

        log(this.bucketKeys[hash], this.bucketValues[hash])
    }

    this.get = function(key){
        const hash = this.getHash(key)

        log(`Retrieving key ${key} Hash: ${hash}`)

        if (!this.bucketKeys[hash]) return null

        for (var i = 0; i < this.bucketKeys[hash].length; i++){
            if (this.bucketKeys[hash][i] === key){
                return this.bucketValues[hash][i]
            }
        }

        return null
    }

    this.getHash = function(input){
        return stringHash(String(input)) % this.bucketCount
    }

    this.printStats = function(){
        for (let bucket of this.bucketValues){
            //console.log(`Items in bucket: ${bucket.length}`)
        }

        console.log(`Load factor: ${this.getLoadFactor()}`)
    }

    this.getLoadFactor = function(){
        return this.itemCount / this.bucketCount
    }

    this.resize = function(size){
        const oldKeys = this.bucketKeys;
        const oldValues = this.bucketValues;

        console.log(`Load factor: ${this.getLoadFactor()}`)
        console.log("Resizing to " + size)

        //reset the hashtable to blank state
        this.bucketKeys = [];
        this.bucketValues = [];
        this.bucketCount = size;
        this.itemCount = 0;

        for (let hash in oldKeys){
            for (let index in oldKeys[hash]){
                //console.log(index)

                const key = oldKeys[hash][index]
                const value = oldValues[hash][index]

                //console.log(key, value)

                this.add(key, value)
            }
        }
    }
}

module.exports = hashTable