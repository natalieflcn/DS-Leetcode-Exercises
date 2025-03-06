// 80) REMOVE ELEMENT
// Initialize an index i to 0. This will track the position in the array where we can place an element that is not equal to val. This also represents the new length of the array after all occurrences of val have been removed.

// Start a loop where j iterates from 0 to the length of the array:

// 2.1. Check if the element at index j in the array is not equal to val.

// 2.2. If true, assign the value at index j to the value at index i in the array, and then increment i by 1.

// Return the new length i after the loop ends. This represents the length of the array after all occurrences of val have been removed.

function removeElement(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

// ------------------------------------
//  Test empty array
// ------------------------------------
let arrEmpty = [];
console.log("Test empty array:");
console.log("Before:", arrEmpty); // Should print: []
let lenEmpty = removeElement(arrEmpty, 3);
console.log("After:", arrEmpty.slice(0, lenEmpty)); // Should print: []
console.log("Length:", lenEmpty); // Should print: 0
console.log("---------------");

// ------------------------------------
//  Test array without the element to remove
// ------------------------------------
let arrNoElem = [1, 2, 3, 4];
console.log("Test array without the element to remove:");
console.log("Before:", arrNoElem); // Should print: [1, 2, 3, 4]
let lenNoElem = removeElement(arrNoElem, 5);
console.log("After:", arrNoElem.slice(0, lenNoElem)); // Should print: [1, 2, 3, 4]
console.log("Length:", lenNoElem); // Should print: 4
console.log("---------------");

// ------------------------------------
//  Test array with one type of element to remove
// ------------------------------------
let arrOneType = [3, 3, 3, 3];
console.log("Test array with one type of element to remove:");
console.log("Before:", arrOneType); // Should print: [3, 3, 3, 3]
let lenOneType = removeElement(arrOneType, 3);
console.log("After:", arrOneType.slice(0, lenOneType)); // Should print: []
console.log("Length:", lenOneType); // Should print: 0
console.log("---------------");

// ------------------------------------
//  Test array with the element to remove scattered
// ------------------------------------
let arrScattered = [1, 2, 3, 4, 2, 2];
console.log("Test array with the element to remove scattered:");
console.log("Before:", arrScattered); // Should print: [1, 2, 3, 4, 2, 2]
let lenScattered = removeElement(arrScattered, 2);
console.log("After:", arrScattered.slice(0, lenScattered)); // Should print: [1, 3, 4]
console.log("Length:", lenScattered); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with all unique elements
// ------------------------------------
let arrUnique = [1, 2, 3, 4];
console.log("Test array with all unique elements:");
console.log("Before:", arrUnique); // Should print: [1, 2, 3, 4]
let lenUnique = removeElement(arrUnique, 3);
console.log("After:", arrUnique.slice(0, lenUnique)); // Should print: [1, 2, 4]
console.log("Length:", lenUnique); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNegative = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Before:", arrNegative); // Should print: [-1, -2, -3, -4]
let lenNegative = removeElement(arrNegative, -2);
console.log("After:", arrNegative.slice(0, lenNegative)); // Should print: [-1, -3, -4]
console.log("Length:", lenNegative); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZeros = [0, 0, 0, 0];
console.log("Test array with zeros:");
console.log("Before:", arrZeros); // Should print: [0, 0, 0, 0]
let lenZeros = removeElement(arrZeros, 0);
console.log("After:", arrZeros.slice(0, lenZeros)); // Should print: []
console.log("Length:", lenZeros); // Should print: 0
console.log("---------------");

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

// 84) Array: Max Profit ( ** Interview Question)
// The function maxProfit aims to find the maximum profit one could achieve by buying and selling a stock once, given an array of stock prices (prices).

function maxProfit(prices) {
  if (prices.length === 0) return 0;

  let minimum = prices[0];

  let index = -1;

  for (let price in prices) {
    if (prices[price] < minimum) {
      minimum = prices[price];
      index = price;
    }
  }
  let maximum = minimum;

  let temp = prices.splice(index);
  for (let sell of temp) {
    if (sell > maximum) {
      maximum = sell;
    }
  }

  const profit = maximum - minimum > 0 ? maximum - minimum : 0;

  return profit;
}

// 85) Array: Rotate ( ** Interview Question)
// The function rotate modifies an array (nums) by rotating its elements to the right by k steps.

function rotate(nums, k) {
  for (let i = k; k > 0; k--) {
    let temp = nums[nums.length - 1];

    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = temp;
  }
}

// 86) Array: Max Sub Array ( ** Interview Question)

function maxSubarray(nums) {
  if (nums.length === 0) return 0;

  let currentSum = nums[0]; //current subarray sum
  let maxSum = nums[0]; //maximum sum so far

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum = currentSum + nums[i];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
