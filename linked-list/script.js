class Node {
  // data members
  data = 0;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  // data members
  head = null;
  tail = null;

  // adding elements
  pushFront(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pushBack(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // deleting elements
  popFront() {
    this.head = this.head.next;
  }

  popBack() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
  }

  // displaying linked-list
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

const list = new LinkedList();
list.pushFront(5);
list.pushFront(4);
list.pushFront(3);
list.pushFront(2);
list.pushFront(1);
list.pushBack(6);
list.pushBack(7);
list.display();