"use strict";

class TrieNode {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}
class Trie {
  constructor(R) {
    this.bound = R;
    this.root = new TrieNode(); 
    this.insert = this.insert.bind(this);
    this.search = this.search.bind(this);
    this.startsWith = this.startsWith.bind(this);
  }

  /**
  inserts given word into trie
    @param {string} word
    @param {object} node (optional -- defaults to 'root' node)
    @return {void}
  **/
  insert(word, node = this.root) {
    if (!word.length) {
      node.setEnd();
      return;
    } else if (!node.keys.has(word[0])) {
      node.keys.set(word[0], new TrieNode());
    }

    return this.insert(word.substring(1), node.keys.get(word[0]));
  }

  /**
    returns if the word is in the trie
    @param {string} word
    @return {boolean}
  **/
  search(word) {

  }

  /**  
    returns if there is any word in the trie that starts with the given prefix
    @param {string} prefix
    @return {boolean}
  **/
  startsWith(prefix) {

  }
}





