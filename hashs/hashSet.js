class HashTable {
    constructor(size=53){
        this.list = new Array(size)
    }

    _hash(key) {
        let total = 0
        let prime = 31
        for (let i=0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.list.length
        }
        return total
    }
    
    set(x,y){
        let index = this._hash(key)
        if (!this.list[index]){
            this.list[index] = []
        }
        this.list[index].push([key, value])
    }
}