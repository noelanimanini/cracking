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

    //create the pointer of the new Node to the current head
    newNode.next = this.head;
    //assign the head to be the new node
    this.head = newNode;
    //increment the length
    this.length++;
    //return the list
    return this;
  }
}
