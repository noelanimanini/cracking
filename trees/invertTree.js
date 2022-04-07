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
newTree.insert(7)
newTree.insert(1)
newTree.insert(3)
newTree.insert(6)
newTree.insert(9)
// console.log(newTree)

const invertingTree = (root) => {
    if (!root) return null 

    let stack = [root] 
    while (stack.length > 0) {
        let current = stack.pop() 

        let temp = current.left 
        current.left = current.right 
        current.right = temp 

        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    console.log(root)

    return root
}

invertingTree(newTree)