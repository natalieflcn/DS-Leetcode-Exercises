// 57) Set: Remove Duplicates
// Your task is to write a function called removeDuplicates that takes a list of numbers or letters as input.

// This list can have some items that appear more than once.

// Your function should return a new list where each number or letter only appears once.

// You can assume the list only contains numbers or letters.

// Example
// Input: [1, 2, 2, 3, 4, 4, 4]
// Output: [1, 2, 3, 4]

// Requirements

// The function should take a list as an input.

// The function should return a new list.

// Each item in the new list should only appear once.

function removeDuplicates(input) {
  const list = new Set();

  for (let x of input) {
    list.add(x);
  }

  return Array.from(list);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4]));
