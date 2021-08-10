/*find the closest value in the tree given a target value also create and insert the tree */

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
    //initialize a new node
    let newNode = new Node(val);
    //if this.root is equal to null, assign the value to be the root
    if (!this.root) {
      this.root = newNode;
    }
    //create a variable to represent the root
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return undefined;
      } else if (current.val < val) {
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      } else if (current.val > val) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      }
    }
  }
}

let tree = new BST();
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(14);
tree.insert(3);
tree.insert(0);

//find the closest value to to the target in the tree.

const findClosest = (tree, target, closest = Infinity) => {
  // let closest = Infinity;
  let current = tree;
  console.log(current);
  if (Math.abs(current.val - target) < Math.abs(target - closest)) {
    closest = current.val;
  }

  if (current.val < target) {
    return findClosest(current.left, target, closest);
  } else if (current.val > target) {
    return findClosest(current.right, target, closest);
  } else {
    console.log(closest);
    return closest;
  }
};

// using a recursive call, I will be finding the absolute value between the target and the current value in the tree,
/*
comparing the closest = Infinity and another value.... 
-make a helper function to determine this. 
*/
findClosest(tree, 7);
