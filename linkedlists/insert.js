//INSERT - adding a value at a specific position, not changing a value at a specific position

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
  insert(index, val) {
    //inserting a value at a specific position, not changing
    //if the index is less than 0 or greater than the length, return null
    if (index < 0 || index > this.length) return false;
    //if the index is equal to the length of the list, push it to the list
    if (index === this.length) this.push(val);
    //if the index is equal to 0, unshift to the beginning of the list
    if (index === 0) this.unshift(val);

    //initialize a new node with the value
    let newNode = new Node(val);
    //grab the previous element from the index using get
    let prevElement = this.get(index - 1);
    //create a temp variable to switch items around. It will be equal to the pointer of the prev.next
    let temp = prevElement.next;

    //assign the pointer of the index to be the new node
    prevElement.next = newNode;
    //assign the new node's .next to be the temp
    newNode.next = temp;
    //increment the length
    this.length++;
    //return true
    return true;
  }
}
