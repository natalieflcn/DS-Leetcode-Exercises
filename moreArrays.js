// 80) REMOVE ELEMENT
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
    }

    for (let j = i; j < nums.length; j++) {
      if (nums[j] !== val) {
        nums[i] = nums[j];
      }
    }
  }
  return nums.length;
}

// 81) FIND MAX MIN

function findMaxMin(myArray) {
  let max = myArray[0];
  let min = myArray[0];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > max) {
      max = myArray[i];
    }

    if (myArray[i] < min) {
      min = myArray[i];
    }
  }

  return [max, min];
}

// 82) FIND LONGEST STRING
// The findLongestString function aims to find the longest string from an array of strings (stringArray).

// The function returns the longest string present in the given array.

// Constraints:

// The array can be empty or contain any number of elements.

// Elements in the array must be strings.

// If there are multiple strings of the same longest length, the function returns the first one it encounters.

function findLongestString(stringArray) {
  if (stringArray.length === 0) return "";

  let max = -1;
  let index = -1;

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > max) {
      max = stringArray[i].length;
      index = i;
    }
  }

  return stringArray[index];
}
// ------------------------------------
//  Test array with short strings
// ------------------------------------
let shortStrs = ["hi", "yo", "hey"];
console.log("Test array with short strings:");
console.log("Array:", shortStrs); // Should print: ["hi", "yo", "hey"]
let resultShort = findLongestString(shortStrs);
console.log("Longest String:", resultShort); // Should print: "hey"
console.log("---------------");

// ------------------------------------
//  Test array with long strings
// ------------------------------------
let longStrs = ["hello", "goodbye", "supercalifragilisticexpialidocious"];
console.log("Test array with long strings:");
console.log("Array:", longStrs); // Should print: ["hello", "goodbye", "supercalifragilisticexpialidocious"]
let resultLong = findLongestString(longStrs);
console.log("Longest String:", resultLong); // Should print: "supercalifragilisticexpialidocious"
console.log("---------------");

// ------------------------------------
//  Test array with varying length strings
// ------------------------------------
let variedStrs = ["short", "longer", "longest"];
console.log("Test array with varying length strings:");
console.log("Array:", variedStrs); // Should print: ["short", "longer", "longest"]
let resultVaried = findLongestString(variedStrs);
console.log("Longest String:", resultVaried); // Should print: "longest"
console.log("---------------");

// ------------------------------------
//  Test array with all same length strings
// ------------------------------------
let sameStrs = ["same", "size", "test"];
console.log("Test array with all same length strings:");
console.log("Array:", sameStrs); // Should print: ["same", "size", "test"]
let resultSame = findLongestString(sameStrs);
console.log("Longest String:", resultSame); // Should print: "same" (or "size" or "test")
console.log("---------------");

// ------------------------------------
//  Test array with one string
// ------------------------------------
let oneStr = ["single"];
console.log("Test array with one string:");
console.log("Array:", oneStr); // Should print: ["single"]
let resultOne = findLongestString(oneStr);
console.log("Longest String:", resultOne); // Should print: "single"
console.log("---------------");

// ------------------------------------
//  Test array with empty strings
// ------------------------------------
let emptyStrs = ["", "", ""];
console.log("Test array with empty strings:");
console.log("Array:", emptyStrs); // Should print: ["", "", ""]
let resultEmpty = findLongestString(emptyStrs);
console.log("Longest String:", resultEmpty); // Should print: ""
console.log("---------------");

// ------------------------------------
//  Test array with numbers as strings
// ------------------------------------
let numStrs = ["123", "1234", "12"];
console.log("Test array with numbers as strings:");
console.log("Array:", numStrs); // Should print: ["123", "1234", "12"]
let resultNum = findLongestString(numStrs);
console.log("Longest String:", resultNum); // Should print: "1234"
console.log("---------------");
