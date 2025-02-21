class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  //1. PUSH METHOD
  //   Write the push method to add an item onto a stack that is implemented with an array.

  // The method should add the given value to the top of the stack, increasing the size of the stack by one.

  // Constraints:
  // The stack should be implemented using an array.

  // You cannot use built-in methods to manipulate the stack, except for the push() method of the array.

  push(value) {
    this.stackList.push(value);
  }

  //2. POP METHOD
  // The method should remove the top element from the stack and return its value. If the stack is empty, the function should return null.

  // Constraints:
  // The stack should be implemented using an array.
  // You cannot use built-in methods to manipulate the stack, except for the pop() method of the array.

  pop() {
    return this.stackList.pop();
  }
}
//SORT STACK

function sortStack(stack) {
  const additionalStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!additionalStack.isEmpty() && temp < additionalStack.peek()) {
      stack.push(additionalStack.pop());
    }
    additionalStack.push(temp);
  }

  while (!additionalStack.isEmpty()) {
    stack.push(additionalStack.pop());
  }
}

//REVERSE STRING
// Implement a function called reverseString() that takes a string as input and returns a new string with its characters reversed, using the Stack class provided.

// Output:
// The method should return a new string with the characters of the input string reversed. "Hello" should return "olleH"

// Constraints:
// You must use the provided Stack class to reverse the string.
// You cannot use built-in string manipulation methods for reversing the string.

function reverseString(string) {
  const myStack = new Stack();

  for (char in string) {
    myStack.push(string[char]);
  }

  let newString = "";

  while (!myStack.isEmpty()) {
    newString += myStack.pop();
  }

  return newString;
}

//PARENTHESE BALANCED
// Implement a function called isBalancedParentheses() that checks if a given string containing parentheses is balanced or not.

// Input:
// A string parentheses.

// Output:
// The function should return a boolean value, true if the input string contains balanced parentheses, and false if not.

// Constraints:
// You must use the provided Stack class to check if the parentheses are balanced.

// You cannot use built-in string manipulation methods for this task.

function isBalancedParentheses(parentheses) {
  if (parentheses.length % 2 !== 0) {
    return false;
  }
  const left = new Stack();
  const right = new Stack();
  let isBalanced = true;

  for (let i = 0; i < Math.floor(parentheses.length / 2); i++) {
    left.push(parentheses[i]);
    right.push(parentheses[parentheses.length - i - 1]);
  }

  while (!left.isEmpty()) {
    let temp1 = left.pop();
    let temp2 = right.pop();

    if (temp1 !== temp2) {
      continue;
    } else {
      isBalanced = false;
      break;
    }
  }

  console.log(left, right);

  return isBalanced;
}

// QUEUE ASSIGNMENTS
//ENQUEUE

//DEQUEUE
// Implement a method called dequeue() for a MyQueue class that removes and returns the element from the front of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

// The function should remove the front element from the queue and return its value. If the queue is empty, the function should return null.

// Constraints:
// The MyQueue class should be implemented using two Stack objects provided in the Stack class.

// You cannot use any other data structures or built-in queue manipulation methods for this task.

console.log(isBalancedParentheses("((()))"));
console.log(isBalancedParentheses("(()"));
console.log(isBalancedParentheses("(()())"));
console.log(isBalancedParentheses(")("));
console.log(isBalancedParentheses(""));

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  peek() {
    return this.stack1.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }

  //ENQUEUE
  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  //DEQUEUE
  dequeue() {
    if (this.stack1.isEmpty()) return null;

    return this.stack1.pop();
  }
}
