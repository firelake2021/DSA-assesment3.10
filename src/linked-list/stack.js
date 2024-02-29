/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insert(value);
  }

  pop() {
    let last = this.linkedList.remove(
      (node, i) => i === this.linkedList.length - 1
    );
    return last;
  }

  peek() {
    let last = this.linkedList.find(
      (node, i) => i === this.linkedList.length - 1
    );
    return last.value;
  }

  isEmpty() {
    this.linkedList.head === null;

    return this.linkedList.head === null;
  }
}

module.exports = Stack;
