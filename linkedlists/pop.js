//Popping is taking the last node off of the linked list
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
    this.length = 0;
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
  pop() {
    //if there is no head, return undefined
    if (!this.head) return undefined;
    /*
    assign the current to be the head, and the "newTail"
    to be the current
    ex: 

    current = 1
    newTail = current = 1
    newTail = 1
    */
    let current = this.head;
    let newTail = current;

    /*
    while there is a current.next, 
    assign the newTail to be the current, and the current
    will be the next current. 

    ex: 

    1. newTail = current = 1
    2. newTail = 1 
      current = {val:2, next: [Node]}
    
    newTail is always lagging behind. Current is always 
    one ahead
    */
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    /*
    As soon as there is no longer a current.next, 
    assign the tail to be the last value {val: 4, next: null}, 
    aka the newTail 
    */
    this.tail = newTail;
    /*
    set the tail's next to be null. 
    take out the pointer, severe the arrow
    */
    this.tail.next = null;
    //decrement the length
    this.length--;
    //if the length is 0, after all the popping, assign both the
    //head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // console.log("current", current);
    return current;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();

console.log(list);
