class Node  {
    constructor(value){
        this.value = value
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
c.left = d
c.right = e

// const depthfirst = (root) => {
    // let stack = [root] 
    // let result = []
    // while(stack.length > 0) {
    //     const current = stack.pop()
    //     result.push(current.value)
    //     console.log(current.value)
    //     if (current.right) stack.push(current.right)
    //     if (current.left) stack.push(current.left)
    // }
// }
const depthfirst = (root) => {
    if (root === null) return []
    const left = depthfirst(root.left)
    const right = depthfirst(root.right)
    console.log([root.value, ...left, ...right])
    return [root.value, ...left, ...right]
}

depthfirst(a)