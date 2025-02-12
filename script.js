//LINKED LISTS

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //1) Find Middle Node
  // Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

  // Output:
  // Return the middle node of the linked list.
  // If the list has an even number of nodes, return the second middle node (the one closer to the end).

  // Constraints:
  // You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
  // You can only traverse the linked list once.

  // Example 1:
  // Suppose you have a LinkedList object, list, with the following values:
  // 1 -> 2 -> 3 -> 4 -> 5 (5 / 2 = 2)
  // After calling the findMiddleNode() function:

  // let middle = list.findMiddleNode();
  // The middle node should have the value 3.

  // Example 2:
  // Now suppose you have a LinkedList object, list, with the following values:
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6 (6 / 2 = 3) + 1
  // After calling the findMiddleNode() function:

  // let middle = list.findMiddleNode();
  // The middle node should have the value 4.

  findMiddleNode() {
    const length = Math.floor(this.tail.value / 2);
    let middle = this.head;

    for (let i = 0; i < length - 1; i++) {
      middle = middle.next;
    }

    if (length % 2 == 1) {
      middle = middle.next;
    }

    return middle;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.printList();
console.log(myLinkedList.findMiddleNode());

myLinkedList.push(6);
myLinkedList.printList();
console.log(myLinkedList.findMiddleNode());
