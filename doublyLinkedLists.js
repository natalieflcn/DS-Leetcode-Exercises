"use strict mode";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //1: SWAP FIRST AND LAST VALUE
  // Implement a member function called swapFirstLast() that swaps the values of the first and last nodes of a doubly linked list.

  // Output:
  // The function should modify the doubly linked list in-place, swapping the values of the first and last nodes.

  // Example 1:
  // Suppose you have a DoublyLinkedList object, list, with the following values:
  // 1 <-> 2 <-> 3 <-> 4 <-> 5

  // After calling the swapFirstLast() function:
  // list.swapFirstLast();
  // The doubly linked list should now have the following values:
  // 5 <-> 2 <-> 3 <-> 4 <-> 1

  // Example 2:
  // Now suppose you have a DoublyLinkedList object, list, with the following values:
  // 3 <-> 1 <-> 2

  // After calling the swapFirstLast() function:
  // list.swapFirstLast();
  // The doubly linked list should now have the following values:
  // 2 <-> 1 <-> 3

  swapFirstLast() {
    if (!this.head) return undefined;
    if (!(this.head === this.tail)) {
      const temp = this.head.value;
      this.head.value = this.tail.value;
      this.tail.value = temp;
    }
    return this;
  }

  //2: REVERSE
  // Implement a member function called reverse() that reverses the nodes of a doubly linked list.

  // Output:
  // The function should modify the doubly linked list in-place, reversing the order of the nodes.

  // Constraints:
  // You can only reverse the nodes themselves, not just their values.

  // Example 1:
  // Suppose you have a DoublyLinkedList object, list, with the following values:
  // 1 <-> 2 <-> 3 <-> 4 <-> 5

  // After calling the reverse() function:
  // list.reverse();

  // The doubly linked list should now have the following values:
  // 5 <-> 4 <-> 3 <-> 2 <-> 1
  reverse() {
    if (!this.head) return undefined;
    if (this.head === this.tail) return;

    let temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    let next = temp.prev;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      temp.next = next;
      temp.prev = prev;
      prev = temp;
      temp = next;
      if (next) {
        next = next.prev;
      }
    }
    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);

console.log("Original list:");
myDoublyLinkedList.printList();

myDoublyLinkedList.reverse();
console.log("\nList after reversing:");
myDoublyLinkedList.printList();

// Create a new list with an even number of elements
let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(-3);
myDoublyLinkedList2.push(-4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal list 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.reverse();
console.log("\nList 2 after reversing:");
myDoublyLinkedList2.printList();
