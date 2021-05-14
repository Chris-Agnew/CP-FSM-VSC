class TrieNode {
  constructor(key) {
    this.children = {};
    this.isWord = false;
    this.prefix = key;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
}
