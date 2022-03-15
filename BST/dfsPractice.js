class Node {
    constructor(value) {
        this.val = value 
        this.left = null 
        this.right = null 
    }
}

const a = new Node(2)
const b = new Node(5)
const c = new Node(7)
const d = new Node(9)
const e = new Node(12)

c.right = d 
c.left = b
b.left = a
d.right = e

// console.log(c)
// https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1737955/Javascript-DFS-Iterative this solution
const depthfirst = (root) => {
    if (root === null) return 0 
    let stack = [root]
    let result = []
    let count = 1
    while (stack.length > 0) {
        let current = stack.pop()
        
        result.push(current.val)
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
        

    }
    console.log(count)
    return count
    // let current = [root]
    // let stack = []
    // let count = 0
    // while (current.length > 0) {
    //     let cur = current.pop()
    //     stack.push(cur.val)

    //     if(cur.right) {
    //         current.push(cur.right)
    //         count++
    //     }
    //     if (cur.left) {
    //         current.push(cur.left)
    //         count++
    //     }
    // }
    // console.log(count)
}

depthfirst(c)

// class Node  {
//     constructor(value){
//         this.value = value
//         this.left = null 
//         this.right = null
//     }
// }

// const a = new Node(1)
// const b = new Node(2)
// const c = new Node(3)
// const d = new Node(4)
// const e = new Node(5)

// a.left = b
// a.right = c
// c.left = d
// c.right = e

// // const depthfirst = (root) => {
//     // let stack = [root] 
//     // let result = []
//     // while(stack.length > 0) {
//     //     const current = stack.pop()
//     //     result.push(current.value)
//     //     console.log(current.value)
//     //     if (current.right) stack.push(current.right)
//     //     if (current.left) stack.push(current.left)
//     // }
// // }
// const depthfirst = (root) => {
//     if (root === null) return []
//     const left = depthfirst(root.left)
//     const right = depthfirst(root.right)
//     console.log([root.value, ...left, ...right])
//     return [root.value, ...left, ...right]
// }

// depthfirst(a)