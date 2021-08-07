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
    //initialize a variable to be the new node
    let newNode = new Node(val);
    //if there is no root, assign the root to be the val
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    //initialize a variable for the root
    let current = this.root;

    //while true, if the val is the same as the root.value, return undefined
    while (true) {
      if (val === current.val) return undefined;
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

  find(val) {
    //if there is no root, return undefined
    if (!this.root) return undefined;
    //create a variable for the root
    let current = this.root;
    //create a variable called found. It is a boolean set to false
    let found = false;
    while (current && !found) {
      //if the value is less than the current.vale, traverse left
      if (val < current.val) {
        current = current.left;
      }
      //if the value is greater than the current.value, traverse right
      else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    console.log(current);
    return current;
  }
  BFS() {
    let current = this.root;
    let data = [];
    let queue = [];

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log(data, data);
    return data;
  }
}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
