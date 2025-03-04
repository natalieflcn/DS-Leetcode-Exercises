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
      while (currNode.next !== sortedUntil) {
        if (currNode.value > currNode.next.value) {
          let temp = currNode.value;
          currNode.value = currNode.next.value;
          currNode.next.value = temp;
        }
        currNode = currNode.next;
      }
      sortedUntil = currNode;
      currNode = this.head;
    }
  }

  // 2) Selection Sort of LL ( ** Interview Question)
  // This method will sort the linked list in ascending order using the Selection Sort algorithm.

  // Here is a brief overview of the steps involved in implementing the selection sort algorithm:

  // Check if the length of the linked list is less than 2. If it is, the list is already sorted, so the method should return immediately.

  // Initialize a Node object current to the head of the list.

  // Set up a while loop that continues as long as current.next is not null.

  // Within this loop, set smallest to current and innerCurrent to the next node in the list.

  // While innerCurrent is not null, if innerCurrent's value is less than smallest's value, set smallest to innerCurrent. Then, advance innerCurrent to the next node.

  // After going through all nodes in the unsorted region, if smallest is not current, swap the values in smallest and current.

  // Move current to the next node and repeat the process until the entire list is sorted.

  // At the end of the sort, update the tail of the list to current.

  selectionSort() {
    if (this.length < 2) return;

    let current = this.head;
    while (current.next !== null) {
      let smallest = current;
      let innerCurrent = current.next;

      while (innerCurrent !== null) {
        if (innerCurrent.value < smallest.value) {
          smallest = innerCurrent;
        }
        innerCurrent = innerCurrent.next;
      }

      if (smallest !== current) {
        let temp = smallest.value;
        smallest.value = current.value;
        current.value = temp;
      }

      current = current.next;
    }

    this.tail = current;
  }

  // 3) Insertion Sort of LL ( ** Interview Question)

  // The insertionSort() method should sort the linked list in place by repeatedly inserting each unsorted node into its correct position in the sorted part of the list.  After the sort, the method should update the head and tail pointers of the linked list to point to the first and last nodes, respectively.

  // The implementation should start with a sortedListHead variable that initially points to the head of the list, and a unsortedListHead variable that initially points to the second node in the list (if it exists).  The method should then iterate through the unsorted part of the list and insert each node into its correct position in the sorted part of the list.

  // If a node in the unsorted part of the list is less than the head of the sorted part of the list, it should become the new head of the sorted list. Otherwise, the method should iterate through the sorted part of the list using a searchPointer variable until it finds the correct position to insert the node.  The node should then be inserted into the sorted list by updating the next reference of the previous node to point to the new node, and the next reference of the new node to point to the next node in the sorted part of the list.

  // Set 'current' to 'unsortedListHead' and update 'unsortedListHead' to its next element
  // If the value of 'current' is less than the value of 'sortedListHead':
  // Set the 'next' pointer of 'current' to 'sortedListHead'
  // Update 'sortedListHead' to 'current'

  // Else:

  // Initialize 'searchPointer' to 'sortedListHead'

  // While 'searchPointer.next' is not null and the value of 'current' is greater than the value of 'searchPointer.next', move 'searchPointer' to the next element

  // Set the 'next' pointer of 'current' to the 'next' pointer of 'searchPointer'

  // Set the 'next' pointer of 'searchPointer' to 'current'

  // Update the head of the list to 'sortedListHead'

  // Traverse the sorted list to find the last element and update the tail of the list to that element
  insertionSort() {
    if (this.length < 2) return;

    let sortedListHead = this.head;
    let unsortedListHead = this.head.next;
    sortedListHead.next = null;

    while (unsortedListHead !== null) {
      let current = unsortedListHead;
      unsortedListHead = unsortedListHead.next;

      if (current.value < sortedListHead.value) {
        current.next = sortedListHead;
        sortedListHead = current;
      } else {
        let searchPointer = sortedListHead;
        while (
          searchPointer.next !== null &&
          current.value > searchPointer.next.value
        ) {
          searchPointer = searchPointer.next;
        }
        current.next = searchPointer.next;
        searchPointer.next = current;
      }
    }
    this.head = sortedListHead;
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    this.tail = temp;
  }

  // 4) LL: Merge Two Sorted Lists ( ** Interview Question)

  // The elements in both lists are assumed to be in ascending order, but the input lists themselves do not need to be sorted.

  //   The merge method works by first obtaining the head node of the 'otherList' and storing it in a local variable named otherHead.
  // A new dummy node is created, initialized with a value of 0. This dummy node serves as the temporary head of the merged list.
  // A variable called current is set to the dummy node. This variable is used to traverse and construct the merged list.
  // The method iterates through both the current list (this.head) and the other list (otherHead). It appends the node with the smaller value to the merged list and moves the head of that list to its next node.
  // The current variable is updated to point to the last node in the merged list.
  // If either of the original lists still has remaining nodes, these are appended to the end of the merged list.
  // The head of the current list is updated to point to the node next to the dummy node, effectively removing the dummy node from the list.
  // The length of the current list (this.length) is updated to include the length of the merged list.

  merge(otherList) {
    let otherHead = otherList.head;
    let dummyNode = new Node(0);

    let current = dummyNode;

    while (otherHead !== null && this.head !== null) {
      if (otherHead.value < this.head.value) {
        current.next = otherHead;
        otherHead = otherHead.next;
      } else {
        current.next = this.head;
        this.head = this.head.next;
      }
      current = current.next;
      current.next = null;
    }

    if (this.head !== null) {
      current.next = this.head;
    }

    if (otherList.head !== null) {
      current.next = otherHead;
    }
    console.log(dummyNode);

    this.head = dummyNode.next;

    return;
  }
}

// ------------------------------------
//  Merge two sorted lists
// ------------------------------------
const list1 = new LinkedList(1);
list1.push(3);
list1.push(5);
const list2 = new LinkedList(2);
list2.push(4);
list2.push(6);
console.log("Merge two sorted lists:");
list1.printList(); // Should print: 1 -> 3 -> 5
list2.printList(); // Should print: 2 -> 4 -> 6
list1.merge(list2);
list1.printList(); // Should print: 1 -> 2 -> 3 -> 4 -> 5 -> 6
console.log("---------------");

// ------------------------------------
//  Merge lists with duplicates
// ------------------------------------
const list5 = new LinkedList(1);
list5.push(2);
list5.push(3);
const list6 = new LinkedList(1);
list6.push(2);
list6.push(3);
console.log("Merge lists with duplicates:");
list5.printList(); // Should print: 1 -> 2 -> 3
list6.printList(); // Should print: 1 -> 2 -> 3
list5.merge(list6);
list5.printList(); // Should print: 1 -> 1 -> 2 -> 2 -> 3 -> 3
console.log("---------------");

// ------------------------------------
//  Merge lists with negative numbers
// ------------------------------------
const list7 = new LinkedList(-1);
list7.push(0);
const list8 = new LinkedList(-2);
list8.push(-1);
console.log("Merge lists with negative numbers:");
list7.printList(); // Should print: -1 -> 0
list8.printList(); // Should print: -2 -> -1
list7.merge(list8);
list7.printList(); // Should print: -2 -> -1 -> -1 -> 0
console.log("---------------");

// ------------------------------------
//  Merge lists where one is larger
// ------------------------------------
const list9 = new LinkedList(1);
list9.push(2);
const list10 = new LinkedList(3);
list10.push(4);
list10.push(5);
console.log("Merge lists where one is larger:");
list9.printList(); // Should print: 1 -> 2
list10.printList(); // Should print: 3 -> 4 -> 5
list9.merge(list10);
list9.printList(); // Should print: 1 -> 2 -> 3 -> 4 -> 5
console.log("---------------");
