class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next || null;
  }
}

let node2 = new Node(3, null);
let node1 = new Node(5, null);

node2.next = node1;

// console.log(node2);

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(element) {
    let node = new Node(element);
    let current;
    this.size++;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  isEmpty() {
    return this.size == 0;
  }
  size() {
    return this.size;
  }
  prepend(element) {
    let node = new Node(element);
    let temp;
    this.size++;
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  find(element) {
    let current = this.head;
    while (current != null)
      if (current.element == element) {
        return `You've found: ${element}`;
      } else {
        current = current.next;
      }
    return `${element} not found`;
  }
}

const list = new LinkedList();

list.append("daniel");
list.append("is");
list.append("cool");
list.append("but");
list.append("Lance");
list.append("is");
list.append("not");
list.prepend("The");
// list.delete("daniel");

console.log(list);
console.log(list.find("coe"));
