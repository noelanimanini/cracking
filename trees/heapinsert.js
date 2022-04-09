class MaxHeap {
    constructor (){
        this.values = [41,39,33,18,27,12]
    }

    insertInto(val){
        this.values.push(val)
        let index = this.values.length - 1 
        let element = this.values[index]
            //values[parentIndex] < values[index]

        while (index > 0){
            let parentIndex = Math.floor((index -1)/ 2)
            let parent = this.values[parentIndex]

            if (parent >= element) break; 
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }
}

let heap = new MaxHeap()
heap.insertInto(55)
console.log(heap)
