class Node {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }
}
//isnt finished 
const insertValues = (preorder, inorder) => {
    let map = new Map() //stores inorder elements
    

    for (let i=0; i < inorder.length; i++) { //looping over the in order values while pushing it into a map 
        map[inorder[i]] = i
    }

    //define a function to start building the tree 
    const buildTree = (preStart, preEnd, inStart, inEnd) => {
        //check if we have traversed the entire preorder or inorder array 
        if (preStart > preEnd || inStart > inEnd) {
            return null 
        }

        //
        let root = new Node(preorder[preStart])

        let inRoot = map[root.val]

        let numsLeft = inRoot - inStart
    }
    
}

