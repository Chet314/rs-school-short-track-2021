const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.node = new ListNode();
    this.data = this.node;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.data.value = element;
    this.data.next = new ListNode();
    this.data = this.data.next;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    const newNode = this.node.value;
    this.node.value = this.node.next.value;
    this.node.next = this.node.next.next;
    this.length--;
    return newNode;
  }
}

module.exports = Queue;
