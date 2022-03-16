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

const BFS = (root) => {
    let queue = [root]

    while (queue.length > 0) {
        let current = queue[0]
    }
}

BFS(a)