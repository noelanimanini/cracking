class Node {
    constructor(val) {
        this.val = val
        this.left = null 
        this.right = null 
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)

a.left = b
a.right = c
b.left = d
b.right = e

const checkNodes = () => {
    if (!root1) return root2
    if (!root2) return root1
    
    root1.val = root1.val + root2.val
    
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    
    return root1
}

checkNodes(a)