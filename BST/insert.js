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
    //initialize a variable to instantiate the new value
    let newNode = new Node(val);

    //if the root is null, then assignt eh new node to be
    //the root and return it
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    //create a variable to represent the root
    let current = this.root;
    //while true, if the value is equal to the current.value, then return undefined
    while (true) {
      if (current.val === val) return undefined;
      //if the value is less than the current.value,
      //and if the current.left is equal to null,
      //assign the current.left to be the new node
      //return the tree
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree);
