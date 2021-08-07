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

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  reverse() {
    //assign a variable to represent the head
    let node = this.head;
    //assign the head to be the tail
    this.head = this.tail;
    //assign the tail to be the variable created
    this.tail = node;
    //initialize a variable for the next, and previous = null
    let next;
    let prev;

    //loop through the list
    for (let i = 0; i < list.length; i++) {
      //assign next to be the node's pointer
      next = node.next;
      //assign the node.next
      node.next = prev;
      prev = node;
      node = next;
    }
    //return the list
    return this;
  }
}
