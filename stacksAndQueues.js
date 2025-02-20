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

const myStack = new Stack();
myStack.push(4);
myStack.printStack();

myStack.pop();
myStack.printStack();
