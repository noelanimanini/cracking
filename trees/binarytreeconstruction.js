class Node {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }
}

class BST {
    constructor(){
        this.root = null
    }

    inOrderTraversal() {
        const traverse = (root) => {
            if (!root) return; 
            traverse(root.left)
            console.log(root.data);
            traverse(root.right)
        }
        traverse(this.root)
    }
}

const createCompleteTree = (arr) => {
    const length = arr.length 
    const binaryTree = new BST()

    const traverseAndReplace = (root, i) => {
        if (i < length) {
            root = new Node(arr[i])
            root.left = traverseAndReplace(root.left, 2 * i + 1)
            root.right = traverseAndReplace(root.right, 2 * i + 2)
        }
        return root
    }
    binaryTree.root = traverseAndReplace(binaryTree.root, 0)
    return binaryTree
}

const result = createCompleteTree([1, 2, 3, 4, 5, 6, 6, 6, 6]);
result.inOrderTraversal();