const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let length = this.linkedList.length;
    let toRemove = this.linkedList.find((el, index) => index === 0);
    let removed = this.linkedList.remove((node, index) => index === 0);
    return removed;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.linkedList.head.value;
    }
    return null;
  }

  isEmpty() {
    let i = this.linkedList.head === null;
    return this.linkedList.head === null;
  }
}

module.exports = Queue;
