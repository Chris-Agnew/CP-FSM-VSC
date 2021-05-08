class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    let current = this.root;
    while (current) {
      if (value == current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

// const manualTree = () => {
//   let tree = new BinarySearchTree();
//   tree.root = new Node(10);
//   tree.root.left = new Node(4);
//   tree.root.right = new Node(15);
//   tree.root.left.left = new Node(3);
//   tree.root.left.right = new Node(6);
//   tree.root.right.left = new Node(14);
//   tree.root.right.right = new Node(20);
//   tree.root.right.right.left = new Node(19);
//   return tree;
// };

// console.log(JSON.stringify(manualTree()));

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(2);
console.log(tree.root);
console.log(tree);
console.log(tree.find(6));
