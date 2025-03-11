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
      this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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

  // LL: Binary to Decimal ( ** Interview Question)
  // You have a linked list where each node represents a binary digit (0 or 1). The goal of the binaryToDecimal function is to convert this binary number, represented by the linked list, into its decimal equivalent.

  // How Binary to Decimal Conversion Works:
  // In binary-to-decimal conversion, each position of a binary number corresponds to a specific power of 2, starting from the rightmost digit.

  // The rightmost digit is multiplied by 2^0 (which equals 1).
  // The next digit to the left is multiplied by 2^1 (which equals 2).
  // The digit after that is multiplied by 2^2 (which equals 4). ... and so on.

  // To find the decimal representation:
  // Multiply each binary digit by its corresponding power of 2 value.
  // Sum up all these products.

  // Example Execution with Binary 101:
  // Start with num = 0.

  // Process 1 (from the head of the linked list): num = 0 * 2 + 1 = 1

  // Process 0: num = 1 * 2 + 0 = 2

  // Process 1: num = 2 * 2 + 1 = 5

  // Return num, which is 5.

  // Steps Involved in the Function:
  // A variable num is initialized to 0, which will store our computed decimal number.
  // Starting from the head of the linked list (the leftmost binary digit), iterate through each node until the end.
  // For every node, double the current value of num (this is analogous to shifting in binary representation). Then, add the binary digit of the current node.
  // Move to the next node and repeat until you've visited all nodes.
  // Return the value in num, which now represents the decimal value of the binary number in the linked list.

  binaryToDecimal() {
    let num = 0;
    let pointer = this.head;

    for (let i = 1; i <= this.length; i++) {
      //console.log(`${pointer.value} is the pointer value`);

      num = num * 2;
      num += pointer.value;
      //console.log(`num is ${num} and i is ${i}`);

      pointer = pointer.next;
    }

    return num;
  }

  // 6. Loop while current pointer is not null

  //    a. If the value of the current node is less than x

  //       i. Set the next of prev1 pointer to the current pointer

  //       ii. Move prev1 pointer one step ahead in the list

  //    b. Else

  //       i. Set the next of prev2 pointer to the current pointer

  //       ii. Move prev2 pointer one step ahead in the list

  //    c. Move current pointer one step ahead in the list

  // 7. Set the next of prev2 pointer to null

  // 8. Set the next of prev1 pointer to the next of dummy2

  // 9. Set the head of the list to the next of dummy1
  partitionList(x) {
    if (!this.head) return;

    let lessThan = new Node(0);
    let moreThan = new Node(0);
    let lessTail = lessThan;
    let moreTail = moreThan;
    let currNode = this.head;

    while (currNode !== null) {
      if (currNode.value < x) {
        lessTail.next = currNode;
        lessTail = currNode;
      } else if (currNode.value > x) {
        moreTail.next = currNode;
        moreTail = currNode;
      }
      currNode = currNode.next;
    }

    moreTail.next = null;
    lessTail.next = moreThan.next;

    this.head = lessThan.next;
  }
}

// Helper function to create list from array
function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
  let temp = ll.head;
  let i = 0;
  while (temp !== null && i < arr.length) {
    if (temp.value !== arr[i]) {
      return false;
    }
    temp = temp.next;
    i++;
  }
  return temp === null && i === arr.length;
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
  console.log("---------------------------------------");
  console.log(`Test ${testNum}: ${description}`);
  console.log("BEFORE: ");
  ll.printList();
  console.log("PARTITION: " + x);
  ll.partitionList(x);
  console.log("AFTER: ");
  ll.printList();
  console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}

// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

console.log("---------------------------------------");

// 14) Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x.

// The original relative order of the nodes should be preserved.

// Input: An integer x, the partition value.

// Output: The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values greater than or equal to x.

// Constraints:
// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
// You can only traverse the linked list once.
// You can create temporary nodes to make the implementation simpler.

// Example 1:
// Input:
// Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

// Output:
// Linked List: 3 -> 2 -> 1 -> 8 -> "5" -> 10

// Example 2:
// Input:
// Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3

// Output:
// Linked List: 1 -> 2 -> 2 -> 4 -> "3" -> 5

// Tips:
// While traversing the linked list, maintain two separate chains: one for values less than x and one for values greater than or equal to x.

// Use dummy nodes to simplify the handling of the heads of these chains.

// After processing the entire list, connect the two chains to get the desired arrangement.
