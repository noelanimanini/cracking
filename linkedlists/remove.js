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
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let count = 0;
    let current = this.head;
    let prev = current;
    while (count < index) {
      count++;
      prev = current;
      current = current.next;
    }
    //save the next value
    let removed = prev.next;
    //reassign the pointer
    prev.next = removed.next;
    //decrement the length
    this.length--;
    console.log("removed", removed);
    return removed;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(4);
list.push(6);
list.remove(2);
console.log(list);
