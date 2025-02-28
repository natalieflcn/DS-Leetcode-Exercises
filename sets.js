// 57) Set: Remove Duplicates
// Your task is to write a function called removeDuplicates that takes a list of numbers or letters as input.
// This list can have some items that appear more than once.
// Your function should return a new list where each number or letter only appears once.
// You can assume the list only contains numbers or letters.

function removeDuplicates(input) {
  const list = new Set();

  for (let x of input) {
    list.add(x);
  }

  return Array.from(list);
}

// 58) Set: Has Unique Chars ( ** Interview Question)
// Your task is to write a function named hasUniqueChars that takes a string as input. Your function should check if all the characters in the string are unique or not. In other words, no character should appear more than once in the string.

// Example
// Input: "hello"
// Output: false

function hasUniqueChars(string) {
  const list = new Set();

  for (let char of string) {
    if (list.has(char)) {
      return false;
    }
    list.add(char);
  }

  return true;
}

// 59) Set: Find Pairs ( ** Interview Question)
// Your task is to write a function named findPairs that takes in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.

// The function should return these pairs as a list.

// Example

// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7

// Output: [[1, 6], [2, 5], [3, 4]]

// In this example, 1 from arr1 and 6 from arr2 add up to 7. Similarly, 2 and 5, and 3 and 4 also add up to 7. So, the function returns these pairs.

function findPairs(arr1, arr2, target) {
  const arrSet = new Set(arr2);
  const solutions = [];

  for (let i = 0; i < arr1.length; i++) {
    const complement = target - arr1[i];

    if (arrSet.has(complement)) {
      solutions.push([arr1[i], complement]);
    }
  }

  return solutions;
}

// Set: Longest Consecutive Sequence ( ** Interview Question)
// Your task is to write a function called longestConsecutiveSequence that takes a list of numbers as input.

// Your function should find and return the length of the longest consecutive sequence of numbers in the list.

function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);

  let longestStreak = 0;

  for (let num in nums) {
    numSet.add(nums[num]);
  }

  for (let num in nums) {
    let currentNum;
    if (numSet.has(nums[num - 1])) {
      currentNum = nums[num - 1];
    } else {
      currentNum = nums[num];
      currentStreak = 1;
      while (nums[num] !== nums[nums.length - 1]) {
        if (nums[num] + 1) {
          currentNum++;

          longestStreak =
            longestStreak > currentStreak ? longestStreak : currentStreak;
        }
      }
    }
  }

  return longestStreak;
}

console.log(longestConsecutiveSequence([1, 3, 4, 2, 5]));
// Example 1:

// Input: [1, 2, 3, 4, 5]

// Output: 5

// In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.

// Example 2:

// Input: [1, 3, 5, 2, 4]

// Output: 5

// Here, even though the numbers are not in order, they still form a consecutive sequence when arranged. So the length is 5.

// Example 3:

// Input: [2, 1, 4, 7, 3]

// Output: 4

// In this example, when arranged in order, the numbers 1, 2, 3, and 4 form a consecutive sequence. So, the length is 4.

// Example 4:

// Input: [9, 1, 3, 10, 2, 20, 21]

// Output: 2

// Here, the longest consecutive sequence is 9 and 10, or 20 and 21, both having a length of 2.

// Example 5:

// Input: [100, 4, 200, 1, 3, 2]

// Output: 4

// In this example, the longest consecutive sequence is 1, 2, 3, and 4. The length is 4.

// Example 6:

// Input: []

// Output: 0

// In this case, the list is empty. Therefore, the length of the longest consecutive sequence is 0.

// Requirements

// Your function should take a list of numbers as input.

// The function should return a single number, which is the length of the longest consecutive sequence.

// Notes

// The numbers in the list can be in any order.

// If the list is empty, the function should return 0.

// The sequence has to be consecutive numbers (e.g., 1, 2, 3...) but they don't have to be in order in the list.
