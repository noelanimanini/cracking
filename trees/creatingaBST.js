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
   let find = new Set()
   const stack = [tree.root]

   while (stack.length > 0){
       const node = stack.pop()
       if (find.has(node.val)) {
           console.log(node.val, k - node.val)
           return true 
       }

       find.add(k - node.val) 
       if (node.left) stack.push(node.left)
       if (node.right) stack.push(node.right)
   }
   console.log(find)
   return false 
} 

traverseDFS(newTree, 11)