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

//83) Array: Remove Duplicates ( ** Interview Question)
// The removeDuplicates function aims to remove duplicates from a sorted array of integers (nums) and returns the new length of the array.
// The function modifies the input array in-place such that each element appears only once and returns the new length.

// Constraints:

// The input array is sorted in ascending order.

// The array can be empty or contain any number of elements.

// Elements in the array are integers.

// The function should not allocate extra space; it must do this by modifying the input array in-place (this means you cannot use another data structure like a set).

// Parameters:

// nums: A sorted array of integers.

// Returns:

// The function returns the new length of the array after removing duplicates.

// If nums is empty, the function returns 0.

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      console.log("if statement running");
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.pop();
      i = 0;
    }
  }

  return arr.length;
}

// ------------------------------------
//  Test array with no duplicates
// ------------------------------------
let noDups = [1, 2, 3, 4];
console.log("Test array with no duplicates:");
console.log("Before:", noDups);
let lenNoDups = removeDuplicates(noDups);
console.log("After:", noDups.slice(0, lenNoDups));
console.log("Length:", lenNoDups);
console.log("---------------");

// ------------------------------------
//  Test array with duplicates
// ------------------------------------
let withDups = [1, 1, 2, 2, 3];
console.log("Test array with duplicates:");
console.log("Before:", withDups);
let lenWithDups = removeDuplicates(withDups);
console.log("After:", withDups.slice(0, lenWithDups));
console.log("Length:", lenWithDups);
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
let emptyArr = [];
console.log("Test empty array:");
console.log("Before:", emptyArr);
let lenEmpty = removeDuplicates(emptyArr);
console.log("After:", emptyArr.slice(0, lenEmpty));
console.log("Length:", lenEmpty);
console.log("---------------");

// ------------------------------------
//  Test array with all same numbers
// ------------------------------------
let allSame = [3, 3, 3];
console.log("Test array with all same numbers:");
console.log("Before:", allSame);
let lenAllSame = removeDuplicates(allSame);
console.log("After:", allSame.slice(0, lenAllSame));
console.log("Length:", lenAllSame);
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let negNumbers = [-1, -1, 0, 2, 2];
console.log("Test array with negative numbers:");
console.log("Before:", negNumbers);
let lenNeg = removeDuplicates(negNumbers);
console.log("After:", negNumbers.slice(0, lenNeg));
console.log("Length:", lenNeg);
console.log("---------------");

// ------------------------------------
//  Test array with one element
// ------------------------------------
let singleElem = [1];
console.log("Test array with one element:");
console.log("Before:", singleElem);
let lenSingle = removeDuplicates(singleElem);
console.log("After:", singleElem.slice(0, lenSingle));
console.log("Length:", lenSingle);
console.log("---------------");
