class Queue {
  constructor() {
    this.array = [];
    this.size = 0;
    this.rear = 0;
  }

  enqueue(num) {
    this.array.push(num);
    this.size++;
  }

  dequeue() {
    this.array.shift();
    this.size--;
  }
  length() {
    return this.array.length;
  }
  getFront() {
    return this.array[0];
  }
  getLast() {
    return this.array[this.array.length - 1];
  }
  print() {
    console.log(this.array);
  }
}

let line = new Queue();

line.enqueue(12);
line.enqueue(16);
line.enqueue(11);
line.enqueue(10);
line.print();
line.dequeue();
line.print();
console.log(line.getFront());
console.log(line.getLast());

class Something extends Queue {}
