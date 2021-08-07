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
    //if there is no root, assign it
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.val === val) {
        return undefined;
      }
      if (current.val > val) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return null;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
  BFS() {
    //Create a queue, and a variable for the root
    let current = this.root;
    let data = [];
    let queue = [];
    queue.push(current);
    //while the queue length is present,
    while (queue.length) {
      //shift the first thing in the queue
      current = queue.shift();
      //push the current value to the queue
      data.push(current.val);
      //if the current.left is still there, current.left
      if (current.left) queue.push(current.left);
      //if the current.right is still there, push it to the queue
      if (current.right) queue.push(current.right);
    }
    console.log("data", data);
    //return the data
    return data;
  }
}

let tree = new BST();
tree.insert(6);
tree.insert(12);
tree.insert(5);
tree.insert(3);
tree.insert(20);
tree.BFS();
