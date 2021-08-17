//instantiate the node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    let current = this.root;
    while (true) {
      if (current.val === val) {
        return undefined;
      }
      if (current.val < val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left === newNode;
          return this;
        }
        current = current.left;
      }
    }
  }
  inOrder() {
    //create an array for the queue
    let data = [];
    //create a function to traverse with the argument of node
    const traverse = (node) => {
      //if the left node exists, traverse the left
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
}
