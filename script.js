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

  //REMOVE DUPLICATES
  //   Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.

  // Note: this linked list class does NOT have a tail which will make this method easier to implement.

  // Output:

  // The function should modify the linked list in-place, removing all nodes with duplicate values.

  // Constraints:

  // You are allowed to use the JavaScript Set data structure to keep track of unique node values.

  // Example 1:

  // Suppose you have a LinkedList object, list, with the following values:
  // 1 -> 2 -> 3 -> 2 -> 1 -> 4

  // After calling the removeDuplicates() function:

  // list.removeDuplicates();
  // The linked list should now have the following values: 1 -> 2 -> 3 -> 4

  // Example 2:

  // Now suppose you have a LinkedList object, list, with the following values:
  // 3 -> 3 -> 3

  // After calling the removeDuplicates() function:

  // list.removeDuplicates();
  // The linked list should now have the following value: 3

  // Remember to update the length.

  removeDuplicates() {
    let fast = this.head;
    let slow = this.head;
    let mySet = new Set();

    while (fast !== null) {
      if (fast.next === null) {
        if (mySet.has(fast.value)) {
          slow.next = null;
          this.length--;
          break;
        } else {
          mySet.add(fast.value);
          break;
        }
      }

      if (mySet.has(fast.value)) {
        //DUPLICATE
        fast = fast.next;
        slow.next = fast;
        this.length--;
      } else {
        //UNIQUE VALUE
        mySet.add(fast.value);
        fast = fast.next;

        if (!mySet.has(fast.value)) {
          slow = slow.next;
        }
      }
    }
  }

  //HAS LOOP
  // Write a method called hasLoop that is part of the linked list class.

  // The method should be able to detect if there is a cycle or loop present in the linked list.

  // You are required to use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the loop.

  // This algorithm uses two pointers: a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a loop in the linked list, the two pointers will eventually meet at some point. If there is no loop, the fast pointer will reach the end of the list.

  // The method should follow these guidelines:

  // Create two pointers, slow and fast, both initially pointing to the head of the linked list.

  // Traverse the list with the slow pointer moving one step at a time, while the fast pointer moves two steps at a time.

  // If there is a loop in the list, the fast pointer will eventually meet the slow pointer. If this occurs, the method should return true.

  // If the fast pointer reaches the end of the list or encounters a null value, it means there is no loop in the list. In this case, the method should return false.

  // Output:

  // Return true if the linked list has a loop.

  // Return false if the linked list does not have a loop.

  // Constraints:

  // You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

  // You can only traverse the linked list once.

  // If your Linked List contains a loop, it indicates a flaw in its implementation. This situation can manifest in several ways:

  hasLoop() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    do {
      slow = slow.next;

      if (fast === null || fast.next === null) {
        return false;
      }

      fast = fast.next.next;
    } while (fast !== slow);

    return true;
  }
}

//TEST CASE 1
let myLinkedList = new LinkedList(4);
myLinkedList.push(11);
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);

console.log("Original list (without loop):");
myLinkedList.printList();

console.log(`\nHas loop? ${myLinkedList.hasLoop()}`);

// Create a loop by linking tail to the second node
myLinkedList.tail.next = myLinkedList.head.next;

//console.log(`\nHas loop? ${myLinkedList.hasLoop()}`);

//TEST 2
let myLinkedList2 = new LinkedList(4);
myLinkedList2.push(11);
myLinkedList2.push(3);
myLinkedList2.push(23);
myLinkedList2.push(7);

console.log("Original list (without loop):");
myLinkedList2.printList();

console.log(`\nHas loop? ${myLinkedList2.hasLoop()}`);

// Create a loop by linking tail to the head
myLinkedList2.tail.next = myLinkedList2.head;

//console.log(`\nHas loop? ${myLinkedList2.hasLoop()}`);

// //TEST 3
// let myLinkedList3 = new LinkedList(4);
// myLinkedList3.push(11);
// myLinkedList3.push(3);
// myLinkedList3.push(23);
// myLinkedList3.push(7);

// console.log("Original list (without loop):");
// myLinkedList2.printList();

// console.log(`\nHas loop? ${myLinkedList3.hasLoop()}`);

// //Disconnecting the tail from the linked list
// let pointer = myLinkedList3.head;

// while (pointer !== null) {
//   if (pointer.next === myLinkedList3.tail) {
//     pointer.next = myLinkedList3.head;
//   }
//   pointer = pointer.next;
// }

// console.log(`\nHas loop? ${myLinkedList3.hasLoop()}`);
