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

// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

function firstNonRepeatingChar(string) {
  const myMap = new Map();
  const newArr = [];

  for (let i = 0; i < string.length; i++) {
    if (myMap.has(string[i])) {
      myMap.set(string[i], myMap.get(string[i]) + 1);
    } else {
      myMap.set(string[i], 1);
    }
  }

  myMap.forEach((value, key) => {
    if (value === 1) {
      newArr.push(key);
    }
  });

  if (newArr[0]) return newArr[0];

  return null;
}

// 54) HT: Group Anagrams ( ** Interview Question)
// In this exercise, your task is to write a JavaScript function named groupAnagrams.

// The function will take an array of strings as its parameter. Your goal is to group anagrams from the given list of strings. An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.

// Your function should return an array of arrays, where each inner array contains a group of anagram strings.

function groupAnagrams(strings) {
  const anagramGroups = new Map();
  const chars = [];
  let str = "";

  for (string in strings) {
    chars.push([...strings[string]]);

    chars[string].sort();

    str += chars[string] + ",";
  }

  for (char in chars) {
    if (anagramGroups.has(chars[char])) {
      console.log("hi");
      continue;
    } else {
      anagramGroups.set(chars[char], true);
    }
  }

  console.log(anagramGroups);
  console.log(chars);
  console.log(str);
}

// Loop through Each String in strings Array
// Convert each string (string) to an array of its characters (chars).
// Sort the chars array.
// Join the sorted chars back into a single string (canonical).

// Check and Update Anagram Groups

// If canonical is already a key in anagramGroups:

// Add the original string to the group associated with that canonical.

// Else:

// Create a new group with string and set it as the value for canonical in anagramGroups.

// For the Map solution: Use .has() to check for existence and .get() to fetch the group. Update using .set().

// For the Object solution: Use .hasOwnProperty() to check for existence and bracket notation to fetch and update.

// Prepare Final Result

// Convert the values in anagramGroups to an array and return it.

// For the Map solution: Use Array.from(anagramGroups.values()).

// For the Object solution: Use Object.values(anagramGroups).

// Return Result

// Return the final array of anagram groups.
//groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// Examples:

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].

// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.

// Your goal is to implement this function using both a Map and an Object to understand the nuances of the syntax of these different hash table types.

// HT: Two Sum ( ** Interview Question)
// In this exercise, you are tasked with writing a JavaScript function called twoSum.

// The function should accept an array of integers (nums) and an integer (target). Your task is to find two numbers in the array that sum up to the target integer. The function should return an array containing the indices of these two numbers. If no such numbers exist, return an empty array.

// Examples:

// twoSum([2, 7, 11, 15], 9) should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

// twoSum([3, 2, 4], 6) should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6.
function twoSum(nums, target) {
  const solutions = [];

  //Comparing nums to keys
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        const sum = nums[i] + nums[j];

        console.log(sum);
        if (sum === target) {
          solutions.push(i);
          solutions.push(j);
          break;
        }
      }
    }

    if (solutions.length > 0) {
      break;
    }
  }

  return solutions;
}

//Map Solution
// Create an empty storage structure (numMap or numObject) for storing numbers and their indices.
function twoSum2(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(num, i);
  }

  return [];
}

console.log("Duplicate Numbers:");
console.log("Input: [3, 3, 11, 15], Target: 6");
console.log("Output: ", JSON.stringify(twoSum2([3, 3, 11, 15], 6)));
console.log("---------------");

// Loop through nums Array
// Iterate over each number in nums and its index (i).

// Calculate the complement (complement) of each number with respect to the target.

// Check and Update Storage Structure

// If the complement is present in the storage structure:

// Return an array containing the index of the complement and the current index (i).

// Else:

// Store the current number (num) and its index (i) in the storage structure.

// For the Map solution: Use .has() to check for existence and .get() to fetch the index. Update using .set().

// For the Object solution: Use .hasOwnProperty() to check for existence and bracket notation to fetch and update.
// ---------------
// Duplicate Numbers
// ---------------
