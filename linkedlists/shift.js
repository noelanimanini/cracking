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
  //take the first node of the list off (beginning)
  shift() {
    //if there is no head, return undefined
    if (!this.head) return undefined;

    //initialize a variable for the current head and reassign the head
    let current = this.head;
    this.head = current.next;
    //decrement the length
    this.length--;
    //if the length is equal to 0
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //return the current head
    return current;
  }
}
