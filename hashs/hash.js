// const map = new Map()

// let m1 = map.set("a", "does this work")
// let m2 = map.set("a", "this is different")
// https://medium.com/free-code-camp/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997


class HashTable  {
    constructor(size = 53) {
        this.list = new Array(size)
    }

    _hash(key) {
        let total = 0
        let prime = 31
        for (let i=0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.list.length
        }
        return total
    }
// ^this converts the string to a hash
} 

let m = new HashTable()

m.set('a', 1)
console.log(m.get('a')) // 1