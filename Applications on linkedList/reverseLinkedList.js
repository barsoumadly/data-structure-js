'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  remove() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
    return this;
  }

  display() {
    let currentNode = this.head;
    let result = '';
    while (currentNode !== null) {
      if (currentNode.next !== null) {
        result += currentNode.data + ' => ';
      } else {
        result += currentNode.data;
      }
      currentNode = currentNode.next;
    }
    console.log(result);
    return this;
  }

  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode !== null) {
      let temp = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = temp;
    }
    this.head = previousNode;
    return this;
  }
}

const list = new LinkedList();
list.add(1).add(2).add(3).add(4).reverse().display();
