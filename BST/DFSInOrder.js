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
    //recursively call the root to traverse the tree
    traverse(this.root);
    return data;
  }
  preOrder() {
    //initialize an array
    let data = [];
    //create a function inside this functino that takes in node as it's argument
    function traverseStuff(node) {
      //push the data into the array
      data.push(node.val);
      //if the left exists, traverse the left
      if (node.left) traverseStuff(node.left);
      //if the right exists, traverse the right
      if (node.right) traverseStuff(node.right);
    }
    //invoke the function
    traverseStuff(this.root);
    //return the array
    return data;
  }
  postOrder() {
    //initialize the array
    let data = [];
    //create a function that takes in node as the argument
    function traverse(node) {
      //if the left exists, traverse,
      if (node.left) traverse(node.left);
      //if the right exists, traverse the right
      if (node.right) traverse(node.right);
      //push the node values into the array
      data.push(node.val);
    }
    //invoke the function
    traverse(this.root);
    //return the data for the user to see this form of traversal
    return data;
  }
}
