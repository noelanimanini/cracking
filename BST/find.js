class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    //if there is no root, assign the value to be the root after
    //you create a new Node variable
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //initialize a variable for the root
    let current = this.root;
    /*
    while true, loop through the tree. If the value and the 
    current value from the root are the same return undefined
    */
    while (true) {
      if (current.val === val) {
        return undefined;
      }

      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.next;
      } else {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.next;
      }
    }
  }
}

let bst = new BST();
bst.insert(5);
bst.insert(6);
bst.insert(3);
console.log(bst);
