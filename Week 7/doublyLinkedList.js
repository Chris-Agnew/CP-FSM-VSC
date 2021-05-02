// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) {
      return null;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail.value = this.tail.prev;
      this.tail.next = null;
      this.length--;
    }
  }
  shift() {
    if (!this.head) {
      return null;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
  }
  unshift(value) {
    if (!this.head) {
      this.head = value;
    }
    if (this.head) {
      this.head.next = this.head;
      this.head = value;
    }
    this.length++;
    return this;
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

// Tests
const list = new DoubleLinkedList();
list.push("Huskies");
list.push("are");
list.push("the");
list.push("best!");
list.shift();
list.unshift("Chris");
list.pop();
console.log(list);
list.print();
