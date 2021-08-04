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

  unshift(val) {
    //adding a node to the beginning of the list
    //initialize a new node with a variable
    let newNode = new Node(val);

    //if there isnt a head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    //assign the new nodes next value to be the head
    newNode.next = this.head;
    this.head = newNode;
    //increment the length
    this.length++;
    //return the list
    return this;
  }
}
