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
  // Output:
  // Return the middle node of the linked list.
  // If the list has an even number of nodes, return the second middle node (the one closer to the end).

  // Constraints:
  // You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
  // You can only traverse the linked list once.

  // Example 1:
  // 1 -> 2 -> 3 -> 4 -> 5 (5 / 2 = 2)
  // After calling the findMiddleNode() function:
  // The middle node should have the value 3.

  // Example 2:
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6 (6 / 2 = 3) + 1
  // The middle node should have the value 4.

  //   1. Initialize slow pointer to the head of the list

  //   2. Initialize fast pointer to the head of the list

  //   3. Loop while fast pointer is not null and fast pointer's next node is not null
  //    a. Move slow pointer one step ahead in the list
  //    b. Move fast pointer two steps ahead in the list

  // 4. Return slow pointer (middle node found)

  findMiddleNode() {
    if (!this) return null;
    if (this.head === this.tail) return this.head;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;

      if (fast.next) fast = fast.next;
    }

    return slow;
  }
  //2) Find Kth Node From End
  // Output:
  // Return the kth node from the end of the linked list.
  // If the value of k is greater than or equal to the number of nodes in the list, return null.

  // Constraints:
  // You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
  // You can only traverse the linked list once.

  // Example 1:
  // Suppose you have a LinkedList object, list, with the following values:
  // 1 -> 2 -> 3 -> 4 -> 5

  // After calling the findKthFromEnd(2) function:
  // let kthNode = list.findKthFromEnd(2);
  // The kthNode should have the value 4.

  // Example 2:
  // Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

  // After calling the findKthFromEnd(4) function:
  // let kthNode = list.findKthFromEnd(4);
  // The kthNode should have the value 3.

  findKthFromEnd(k) {
    if (!this || k <= 0) return null;
    if (this.head === this.tail) return this.head;

    let fast = this.head;
    let slow = this.head;

    while (fast !== null) {
      fast = fast.next;

      if (k) {
        k--;
      } else {
        slow = slow.next;
      }
    }

    return slow;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.printList();
console.log(myLinkedList.findKthFromEnd(2));

myLinkedList.push(6);
myLinkedList.printList();
console.log(myLinkedList.findKthFromEnd(2));
