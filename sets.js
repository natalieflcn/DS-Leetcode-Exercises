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

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4]));

// 56) Set: Has Unique Chars ( ** Interview Question)
// Your task is to write a function named hasUniqueChars that takes a string as input. Your function should check if all the characters in the string are unique or not. In other words, no character should appear more than once in the string.

// Example
// Input: "hello"
// Output: false

// In this example, the letter 'l' appears two times in the word "hello". So, the function should return false.

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

console.log(hasUniqueChars("world"));
// Notes

// The function should consider upper-case and lower-case letters as different. For example, 'A' and 'a' should be considered unique.

// An empty string should return true as it doesn't have any repeated characters.
