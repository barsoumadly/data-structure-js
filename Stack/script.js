class Node {
  // data members
  data = 0;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class Stack {
  head = null;

  // adding element
  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  // deleting element
  pop() {
    this.head = this.head.next;
  }

  // displaying element
  display() {
    let currentNode = this.head;
    let result = ``;
    while (currentNode !== null) {
      result += currentNode.data;
      if (currentNode.next !== null) {
        result += ` => `;
      }
      currentNode = currentNode.next;
    }
    console.log(result);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();
