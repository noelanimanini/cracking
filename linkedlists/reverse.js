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
    //set a variable equal to the head, tail and assign the head to be the tail
    let node = this.head;
    this.head = this.tail;
    //set variables equal to the next and prevous = null
    let next;
    let prev = null;

    //loop through the list
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    //return the list
  }
}
