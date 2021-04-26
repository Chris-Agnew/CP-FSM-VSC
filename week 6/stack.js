class Stack {
  constructor() {
    this.array = [];
    this.top = 0;
  }
  push(item) {
    this.top++;
    return this.array.unshift(item);
  }
  pop() {
    this.top--;
    return this.array.shift();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  length() {
    return this.top;
  }
  print() {
    console.log(this.array);
  }
  isEmpty() {
    return this.array == 0;
  }
}

let test = new Stack();

test.push(1);
test.push("hello");
test.push(12);
test.print();
test.pop();
test.print();
console.log(test.peek());
console.log(test.length());
console.log(test.isEmpty());
