// 1) BUBBLE SORT OF LL
// Implement the bubble sort algorithm in a singly linked list.

// The linked list will contain integer elements.

// You need to write a method bubbleSort() within the LinkedList class. This method will sort the linked list in ascending order using the Bubble Sort algorithm.

// The Bubble Sort algorithm works by comparing each pair of adjacent elements in the list and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// Here is a brief overview of the steps involved in implementing the bubble sort algorithm:

// Check if the length of the linked list is less than 2. If it is, the list is already sorted, so the method should return immediately.

// Initialize a Node object sortedUntil to null. This will act as a marker to the end of the sorted portion of the list.

// Set up a while loop that continues as long as sortedUntil does not equal the second node in the list (this.head.next).

// Within this loop, start from the head of the list and compare the value of the current node with the value of the next node.

// If the value of the current node is greater than the value of the next node, swap the values.

// Continue comparing and swapping until you reach the node before sortedUntil.

// At the end of each pass through the list, set sortedUntil to the last node that was examined. This marks the end of the sorted portion of the list and the start of the unsorted portion for the next pass.

// The algorithm continues until the list is fully sorted.

// Please make sure your code follows the above steps to implement the bubble sort method correctly.

// You may assume that all values in the list are integers. Also, please note that your bubbleSort() method should not return any value; it should sort the linked list in-place. That is, it should modify the original linked list rather than creating and returning a new, sorted list.

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
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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
    this.length++;
    return this;
  }

  bubbleSort() {
    if (this.length < 2) return;

    let sortedUntil = null;
    let currNode = this.head;

    while (sortedUntil !== currNode.next) {
      if (currNode > currNode.next) {
        let temp = currNode.value;
        currNode.value = currNode.next.value;
        currNode.next.value = temp;
      }

      sortedUntil = currNode;
    }
  }
}

// ------------------------------------
//  Sort descending list
// ------------------------------------
const list1 = new LinkedList(4);
list1.push(3);
list1.push(2);
list1.push(1);
console.log("Sort descending list:");
list1.printList(); // Should print: 4 -> 3 -> 2 -> 1
list1.bubbleSort();
list1.printList(); // Should print: 1 -> 2 -> 3 -> 4
console.log("---------------");

// ------------------------------------
//  Sort already sorted list
// ------------------------------------
const list2 = new LinkedList(1);
list2.push(2);
console.log("Sort already sorted list:");
list2.printList(); // Should print: 1 -> 2
list2.bubbleSort();
list2.printList(); // Should print: 1 -> 2
console.log("---------------");

// ------------------------------------
//  Sort list with random elements
// ------------------------------------
const list3 = new LinkedList(3);
list3.push(1);
list3.push(4);
list3.push(2);
console.log("Sort list with random elements:");
list3.printList(); // Should print: 3 -> 1 -> 4 -> 2
list3.bubbleSort();
list3.printList(); // Should print: 1 -> 2 -> 3 -> 4
console.log("---------------");

// ------------------------------------
//  Sort list with duplicate elements
// ------------------------------------
const list4 = new LinkedList(3);
list4.push(3);
list4.push(2);
list4.push(2);
console.log("Sort list with duplicate elements:");
list4.printList(); // Should print: 3 -> 3 -> 2 -> 2
list4.bubbleSort();
list4.printList(); // Should print: 2 -> 2 -> 3 -> 3
console.log("---------------");

// ------------------------------------
//  Sort single-element list
// ------------------------------------
const list5 = new LinkedList(1);
console.log("Sort single-element list:");
list5.printList(); // Should print: 1
list5.bubbleSort();
list5.printList(); // Should print: 1
console.log("---------------");

// ------------------------------------
//  Sort list with negative numbers
// ------------------------------------
const list6 = new LinkedList(-1);
list6.push(-2);
list6.push(1);
console.log("Sort list with negative numbers:");
list6.printList(); // Should print: -1 -> -2 -> 1
list6.bubbleSort();
list6.printList(); // Should print: -2 -> -1 -> 1
console.log("---------------");

// ------------------------------------
//  Sort list with zeros
// ------------------------------------
const list7 = new LinkedList(0);
list7.push(0);
list7.push(1);
console.log("Sort list with zeros:");
list7.printList(); // Should print: 0 -> 0 -> 1
list7.bubbleSort();
list7.printList(); // Should print: 0 -> 0 -> 1
console.log("---------------");

// ------------------------------------
//  Sort empty list
// ------------------------------------
const list8 = new LinkedList(1);
list8.makeEmpty();
console.log("Sort empty list:");
list8.printList(); // Should print: empty
list8.bubbleSort();
list8.printList(); // Should print: empty
console.log("---------------");
