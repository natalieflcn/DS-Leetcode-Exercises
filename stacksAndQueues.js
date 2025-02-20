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

// QUEUE ASSIGNMENTS
//ENQUEUE

//DEQUEUE
// Implement a method called dequeue() for a MyQueue class that removes and returns the element from the front of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

// The function should remove the front element from the queue and return its value. If the queue is empty, the function should return null.

// Constraints:
// The MyQueue class should be implemented using two Stack objects provided in the Stack class.

// You cannot use any other data structures or built-in queue manipulation methods for this task.

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

const my = new MyQueue();
my.enqueue(1);
my.enqueue(2);
my.enqueue(3);

console.log(my);
