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
  //retrieving a node by it's position (index) in the linked list
  get(index) {
    //if the index is less than 0 or greater than or equal to the length, return null
    if (index < 0 || index >= this.length) return null;
    //initialize a counter
    let counter = 0;
    //initialize a variable for the head
    let current = this.head;
    //while the counter is not equal to the index, loop through the list and increase the counter
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    //return the current node that the counter stops at
    return current;
  }
}
