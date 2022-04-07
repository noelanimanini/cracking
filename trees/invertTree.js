//inverting a binary tree 226 

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
}

class BST {
    constructor() {
        this.root = null 
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } 
        let current = this.root; 
        while (true) {
            if (current.val === val) return undefined; 
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode
                    return this;
                }
                current = current.left 
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this;
                }
                current = current.right 
            }
        }

    }
}

let newTree = new BST()
newTree.insert(4)
newTree.insert(2)
newTree.insert(5)
console.log(newTree)