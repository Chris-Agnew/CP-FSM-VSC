/* Class representing a Trie data structure */
class Trie {
  constructor() {
    this.end = false;
    this.prefixes = 0;
    this.children = {};
  }

  insert(str, pos = 0) {
    if (str.length === pos) {
      this.end = true;
      return;
    }

    let key = [str[pos]];
    if (!this.children[key]) this.children[key] = new Trie();

    this.children[key].insert(str, pos + 1);
  }

  getAllWords(word = "", words = []) {
    if (this.end) words.push(word);

    for (let key in this.children) {
      this.children[key].getAllWords(word + key, words);
    }
    return words;
  }

  remove(word) {}
}

// tests
const trie = new Trie();
trie.insert("cat");
trie.insert("catfish");
trie.insert("clog");
trie.insert("clap");
trie.insert("company");

trie.insert("dog");
trie.insert("daniel");
trie.insert("david");
trie.insert("digest");
trie.insert("dig");

trie.insert("system");
trie.insert("sara");
trie.insert("story");
trie.insert("storage");
trie.insert("stimulus");

console.log(trie);
console.log(trie.getAllWords());

//Implement remove function
// trie.remove("", )
// console.log(trie.getAllWords());
