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
        let index = this._hash(x)
        if (!this.list[index]){
            this.list[index] = []
        }
        this.list[index].push([x, y])
    }

    get(x) {
        let index = this._hash(x)
        if (this.list[index]){
            for (let i=0; i < this.list[index].length; i++) {
                if(this.list[index][i][0] === x) {
                    return this.list[index][i][1]
                }
            }
        }
        return undefined
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")



console.log(ht.get("maroon"))