class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  delete(value) {
    if (!this.root){
      return `There is no ${value} to delete!`
    }
    let current = this.root
    while (current) {
      if (current == value) {
        current.value = null
      }else if (value < current.value) {
      
      }
    }
  }
}

let bst = new BST();
bst.insert(57);
bst.insert(43);
bst.insert(65);
console.log(bst);
