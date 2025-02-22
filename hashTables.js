// 51) HT: Item In Common
// itemInCommon should take two arrays as its parameters. The goal of the function is to determine whether the two arrays have at least one element in common.

// If there is at least one common element between the two arrays, your function should return true. If there are no common elements, the function should return false.

function itemInCommon2(arr1, arr2) {
  const myMap = new Map();

  for (let i = 0; i < arr1.length; i++) {
    myMap.set(arr1[i], true);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (myMap.has(arr2[i])) {
      return true;
    }
  }

  return false;
}

// Object: The most basic data structure in JavaScript, which can also act like a hash table for key-value storage.
function itemInCommon(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      return true;
    }
  }

  return false;
}

// 52) HT: Find Duplicates ( ** Interview Question)
// In this exercise, you are required to write a JavaScript function called findDuplicates. This function will take an array of numbers as its only parameter. Your goal is to identify and return all the numbers that appear more than once in the array.

// The function should return a new array containing the duplicate numbers. The function should return an empty array if there are no duplicate numbers.

// Map: A built-in object that lets you store key-value pairs in an organized manner.
function findDuplicates(arr) {
  const myMap = new Map();
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    } else {
      myMap.set(arr[i], 1);
    }
  }

  myMap.forEach((value, key) => {
    if (value > 1) {
      newArr.push(key);
    }
  });

  return newArr;
}

// 53) HT: First Non-Repeating Character ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named firstNonRepeatingChar.

// The function will take a string as its only parameter. Your goal is to find and return the first character in the string that does not repeat. If every character in the string repeats, or if the string is empty, the function should return null.

// Examples:

// firstNonRepeatingChar("aabbcc") should return null because all the characters appear more than once.

// firstNonRepeatingChar("aabbcde") should return 'd' because it's the first non-repeating character.

// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.

// Feel free to try solving the exercise using both a Map and an Object to get the hang of using these different types of hash tables.
