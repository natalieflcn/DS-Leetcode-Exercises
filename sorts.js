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

  // The insertionSort() method should sort the linked list in place by repeatedly inserting each unsorted node into its correct position in the sorted part of the list.  If the length of the linked list is less than 2, the method should simply return because the list is already sorted.  After the sort, the method should update the head and tail pointers of the linked list to point to the first and last nodes, respectively.

  // The implementation should start with a sortedListHead variable that initially points to the head of the list, and a unsortedListHead variable that initially points to the second node in the list (if it exists).  The method should then iterate through the unsorted part of the list and insert each node into its correct position in the sorted part of the list.

  // If a node in the unsorted part of the list is less than the head of the sorted part of the list, it should become the new head of the sorted list. Otherwise, the method should iterate through the sorted part of the list using a searchPointer variable until it finds the correct position to insert the node.  The node should then be inserted into the sorted list by updating the next reference of the previous node to point to the new node, and the next reference of the new node to point to the next node in the sorted part of the list.
}
