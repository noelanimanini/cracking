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
  find(value) {
    //finding the value in the BST
    //if the root is null, return false
    if (!this.root) return false;
    //initialize a variable for the current (the root)
    let current = this.root;
    //initialize a variable for found, a boolean set to false
    let found = false;
    /*
    while there is a current and the found is falsy, 
     if the value is less than the current.value,
     traverse left 
     if the value is greater than the current value, 
     traverse right 
     else 
     set found to true
    */
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    //if the found is true, then return undefined
    if (!found) return undefined;
    //return the current
    return current;
  }
}

let bst = new BST();
bst.insert(5);
bst.insert(6);
bst.insert(3);
console.log(bst);
