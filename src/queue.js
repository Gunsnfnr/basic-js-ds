const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  node;
  
  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.node) {
      this.node = newNode;
    } else {
      let currNode = this.node;
      while (currNode.next) {
        currNode = currNode.next ;
      }
      currNode.next = newNode;
    }
    return this.node;
  }

  dequeue() {
    const deletedNode = this.node.value;
    this.node.value = this.node.next.value;
    this.node.next = this.node.next.next;
    return deletedNode;
  }
}

module.exports = {
  Queue
};
