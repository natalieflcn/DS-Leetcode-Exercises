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

  //3.
  //Implement a member function called isPalindrome() that checks if a doubly linked list is a palindrome.

  // A doubly linked list is a palindrome if the sequence of values read from the head to the tail is the same as the sequence of values read from the tail to the head.

  // Output:
  // Return a boolean value: true if the doubly linked list is a palindrome, and false otherwise.

  // Constraints:
  // You can only traverse the doubly linked list once.

  // Example 1:

  // Suppose you have a DoublyLinkedList object, list, with the following values:
  // 1 <-> 2 <-> 3 <-> 2 <-> 1

  // result should be true, as the doubly linked list is a palindrome.

  // Example 2:
  // Now suppose you have a DoublyLinkedList object, list, with the following values:
  // 3 <-> 1 <-> 2

  // After calling the isPalindrome() function:
  // const result = list.isPalindrome();
  // result should be false, as the doubly linked list is not a palindrome.
  isPalindrome() {
    let palindrome = true;
    let beginning = this.head;
    let end = this.tail;

    while (beginning) {
      if (beginning.value === end.value) {
        beginning = beginning.next;
        end = end.prev;
        continue;
      } else {
        palindrome = false;
        break;
      }
    }

    return palindrome;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(1);

console.log("List 1:");
myDoublyLinkedList.printList();
console.log("Is List 1 a palindrome? " + myDoublyLinkedList.isPalindrome());

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);

console.log("\nList 2:");
myDoublyLinkedList2.printList();
console.log("Is List 2 a palindrome? " + myDoublyLinkedList2.isPalindrome());
