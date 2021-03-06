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
    insert(val){
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this;
        } 
        let current = this.root; 
        while (true){
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
    //insertion in a BST is Θ(log(n)) 

}

let newTree = new BST()

newTree.insert(5)
newTree.insert(6)
newTree.insert(7)
newTree.insert(3)
newTree.insert(2)
newTree.insert(4)

/*
   5
  / \
 3   6
      \ 
       70
*/ 

/*
Given a Binary Search Tree and an integer k, we have to determine if there exist two nodes in the the BST with sum of values equal to the given target. The input is root of the tree and output can be true or false.
*/ 

const traverseDFS = (tree, k) => {
//   use a hash map! 
   let find = new Set() // o (1)
   const stack = [tree.root] // o(n)
   
   while (stack.length > 0){
       const node = stack.pop()
       if (find.has(node.val)) {
        //    console.log(node.val, k - node.val)
           return true 
       }

       find.add(k - node.val) 
       if (node.left) stack.push(node.left)
       if (node.right) stack.push(node.right)
   }
//    console.log(find)
   return false 
} 

// traverseDFS(newTree, 11)

const invertTree = (root)=> {

    // let stack = [root.root]

    // while (stack.length > 0) {
    //     let curr = stack.pop()
    //     // console.log('val', curr.val)
    //     let temp = curr.left 
    //     // console.log( 'temp', temp)
    //     curr.left = curr.right 
    //     // console.log( 'left', curr.left)
    //     curr.right = temp
    //     // console.log( 'right', curr.right)

    //     if (curr.left) stack.push(curr.left)
    //     if (curr.right) stack.push(curr.right)
    // }  
    // console.log(root.root)
    // return root.root
    let node = root.root
    if (!node) return

    let temp = node.left
    node.left = node.right
    node.right = temp

    invertTree(node.left)
    invertTree(node.right)
    
    // console.log(node)
    return node
}

let tree = new BST()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(6)
tree.insert(7)
tree.insert(8)

// invertTree(tree)

const leftView = (root) => {
    let values = []
   const dfs = (node) => {
       if (!node) return null 

       dfs(node.left)
       values.push(node.val)
       dfs(node.right)
       
   }
   dfs(root.root)
   console.log(values)
   return values
}

leftView(tree)