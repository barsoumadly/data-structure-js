class Node {
  // data members
  data = 0;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class Queue {
  // data members
  head = null;
  tail = null;

  // adding element
  enqueue(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // deleting element
  dequeue() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
  }

  // displaying elements
  display() {
    let currentNode = this.head;
    let result = ``;
    while (currentNode !== null) {
      result += `${currentNode.data}`;
      if (currentNode.next !== null) {
        result += ` => `;
      }
      currentNode = currentNode.next;
    }
    console.log(result);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.display();
