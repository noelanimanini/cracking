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
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.val === val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    // console.log("current", current);
    return current;
  }
  contains(val) {
    //if there is no root, return undefined
    if (!this.root) return undefined;
    //initialize a variable for the root and a boolean for found
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        console.log("current", current, found);
        found = true;
      }
    }

    return false;
  }
}

let tree = new BST();
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.find(2);
tree.contains(7);
console.log(tree);
