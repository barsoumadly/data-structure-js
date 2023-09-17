'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    const node = new Node(data);
    if (this.head !== null) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
    return this;
  }

  pop() {
    const currentNode = this.head;
    this.head = this.head.next;
    currentNode.next = null;
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

  top() {
    console.log(this.head.data);
    return this;
  }

  getTopElement() {
    if (this.head !== null) {
      return this.head.data;
    }
    return undefined;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }
}

// const stack = new Stack();
// stack.push(1).push(2).push(3).push(4).pop().display().top().push(4).display();

const isOperand = function (char) {
  if (
    char === '+' ||
    char === '-' ||
    char === '*' ||
    char === '/' ||
    char === '#'
  ) {
    return false;
  }
  return true;
};

const checkPrecedence = function (char) {
  if (char === '*' || char === '/') {
    return 2;
  } else if (char === '+' || char === '-') {
    return 1;
  }
  return 0;
};

// infix expression 5+3*4-60/10
const convertFromInfixToPostfix = function (infixExpression) {
  let postfixExpression = '';
  const stack = new Stack();
  let index = 0;
  while (index < infixExpression.length) {
    if (isOperand(infixExpression.charAt(index))) {
      postfixExpression += infixExpression.charAt(index);
      index++;
    } else {
      if (isOperand(postfixExpression.charAt(postfixExpression.length - 1))) {
        postfixExpression += '#';
      }
      const element = infixExpression.charAt(index);
      if (checkPrecedence(element) > checkPrecedence(stack.getTopElement())) {
        stack.push(element);
        index++;
      } else {
        postfixExpression += stack.getTopElement();
        stack.pop();
      }
    }
  }
  postfixExpression += '#';
  while (!stack.isEmpty()) {
    postfixExpression += stack.getTopElement();
    stack.pop();
  }
  return postfixExpression;
};

const calcValue = function (num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
};

const evaluatePostfixExpression = function (postfixExpression) {
  const stack = new Stack();
  let result = 0;
  let temp = '';
  for (let i = 0; i < postfixExpression.length; i++) {
    const element = postfixExpression.charAt(i);
    if (isOperand(element)) {
      temp += element;
    } else if (element === '#') {
      stack.push(temp);
      temp = '';
    } else {
      const num2 = Number.parseInt(stack.getTopElement());
      stack.pop();
      const num1 = Number.parseInt(stack.getTopElement());
      stack.pop();
      result = calcValue(num1, num2, element);
      stack.push(result);
    }
  }
  return stack.getTopElement();
};

const postfixExpression = convertFromInfixToPostfix('20+4*5-6/2');
const result = evaluatePostfixExpression(postfixExpression);
console.log(result);
