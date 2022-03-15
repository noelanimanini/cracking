class Node {
    constructor(value) {
        this.val = value
        this.left = null 
        this.right = null
    }
}

const a = new Node (1)
const b = new Node (2)
const c = new Node (3)
const d = new Node (4)
const e = new Node (5)

a.left = b
a.right = c
b.left = d
b.right = e
const inOrder = (root) => {
    /*
      1. Traverse the left subtree, i.e., call Inorder(left-subtree)
      2. Visit the root.
      3. Traverse the right subtree, i.e., call Inorder(right-subtree)
    */ 

    let visited = []
   
    let traverse = (node) => {
        if (node.left) traverse(node.left)
        visited.push(node.val)
        if(node.right) traverse(node.right)
    }
    traverse(root)
    console.log(visited)
    return visited
}

inOrder(a)