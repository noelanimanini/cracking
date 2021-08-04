class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  set(index, val) {
    //changing the value of a node at it's position/index
    //grab the node at that index using the get method
    let getNode = this.get(index);

    //if the value is found, grab the value and assign it to val
    if (getNode) {
      getNode.val = val;
      //return true
      return true;
    }
    //else return false
    return false;
  }
}
