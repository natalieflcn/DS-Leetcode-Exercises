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
// Implement a function called sortStack() that takes a stack of integers as input and sorts the stack in ascending order (with the smallest element on top) using an additional temporary stack.

// Input:
// A Stack object stack containing integer values.

// Output:
// The function should modify the original input stack, sorting its elements in ascending order.

// Constraints:
// You must use the provided Stack class to store and manipulate the elements.
// You cannot use any other data structures or built-in sorting methods for this task.
//
// Pseudo Code:

// b. Procedure:

// i. Create a new Stack instance called additionalStack

// ii. Loop while the input stack is not empty

// 1. Pop the top element from the input stack and store it in a variable called temp

// 2. Loop while additionalStack is not empty and the top element of additionalStack is greater than temp

// a. Pop the top element from additionalStack and push it onto the input stack

// 3. Push temp onto additionalStack

// iii. Loop while additionalStack is not empty

// 1. Pop the top element from additionalStack and push it onto the input stack

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

// Example 1:
// Suppose you have a Stack object, stack, with the following values:
// [5, 3, 1, 4, 2]

// After calling the sortStack() function:
// sortStack(stack);

// The stack should now have the following values:
// [5, 4, 3, 2, 1]

const myStack = new Stack();
myStack.push(5);
myStack.push(3);
myStack.push(1);
myStack.push(4);
myStack.push(2);
console.log("My original Stack:");
myStack.printStack();

console.log("My Stack after sorting:");
sortStack(myStack);
myStack.printStack();
