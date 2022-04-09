class MaxHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        //push the value into the end 
        this.values.push(val)
        //grab the index of the last element recently added 
        let index = this.values.length - 1 
        //grab the element
        let element = this.values[index] 

        //create a while loop for while the index is greater than 0
        while (index > 0) {
            // grab the parent index of the current index 
            let parentIndex = Math.floor((index - 1) / 2) 
            //grab the parent element 
            let parent = this.values[parentIndex]

            //if the parent is larger than the new element, break.
            if (parent >= element) break; 
            //otherwise, perform a swap

            //swap the parent for the element
            this.values[parentIndex] = element; 
            //swap the element for the parent
            this.values[index] = parent; 
            //reassign the index 
            index = parentIndex
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()

        this.values[0] = end 
        //trickle down 
        this.sinkDown()
        // console.log(max)
        return max 
    }

    sinkDown(){
        let index = 0
        const length = this.values.length 
        const element = this.values[0]

        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2

            let leftchild, rightchild; //checking for out of bounds

            let swap = null; 

            if (leftChildIndex < length) {
                leftchild = this.values[leftChildIndex]
                if (leftchild > element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightchild = this.values[rightChildIndex]
                if (swap = null && rightchild > element || (swap !== null && rightchild > leftchild)) {
                    swap = rightChildIndex
                    index = swap
                }
            }

            if (swap === null) break; 

            this.values[index] = this.values[swap]
            this.values[swap] = element
 


        }
    }

}

let heap = new MaxHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax())