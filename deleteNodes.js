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
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
}

const deleteDuplicates = (head) => {
  // console.log(head)
  let current = head.next;
  let arr = [];
  var list = new SinglyLinkedList();
  while (current) {
    // console.log(current)
    arr.push(current.val);
    current = current.next;
  }

  let newArray = [].sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArray.push(arr[i]);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    list.push(newArray[i]);
  }

  return list;
};

let example = new SinglyLinkedList();
example.push(1);
example.push(1);
example.push(2);
example.push(3);
example.push(3);
// console.log(example.head)
deleteDuplicates(example.head);
