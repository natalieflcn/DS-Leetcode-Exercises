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

// It does so in-place without allocating extra space.

// Constraints:

// The array can be empty or contain any number of elements.

// The array contains integers.

// The value of k can be positive, negative, or zero.

function rotate(nums, k) {
  for (let i = k; k > 0; k--) {
    let temp = nums[nums.length - 1];

    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = temp;
  }
}

// ------------------------------------
//  Test array rotation by 1
// ------------------------------------
console.log("Rotate by 1:");
let rotate1 = [1, 2, 3, 4, 5];
console.log("Before:         ", rotate1.join(", "));
rotate(rotate1, 1);
console.log("Expected After:  5, 1, 2, 3, 4");
console.log("Actual After:   ", rotate1.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation by array length
// ------------------------------------
console.log("Rotate by array length:");
let rotateLen = [1, 2, 3];
console.log("Before:         ", rotateLen.join(", "));
rotate(rotateLen, 3);
console.log("Expected After:  1, 2, 3");
console.log("Actual After:   ", rotateLen.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation by 0
// ------------------------------------
console.log("Rotate by 0:");
let rotateZero = [4, 3, 2, 1];
console.log("Before:         ", rotateZero.join(", "));
rotate(rotateZero, 0);
console.log("Expected After:  4, 3, 2, 1");
console.log("Actual After:   ", rotateZero.join(", "));
console.log("---------------");

// ------------------------------------
//  Test empty array rotation
// ------------------------------------
console.log("Empty array:");
let rotateEmpty = [];
console.log("Before:         ", rotateEmpty.join(", "));
rotate(rotateEmpty, 1);
console.log("Expected After:  ");
console.log("Actual After:   ", rotateEmpty.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation with negative k
// ------------------------------------
console.log("Negative k value:");
let rotateNeg = [5, 6, 7, 8];
console.log("Before:         ", rotateNeg.join(", "));
rotate(rotateNeg, -1);
console.log("Expected After:  6, 7, 8, 5");
console.log("Actual After:   ", rotateNeg.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array with all same elements
// ------------------------------------
console.log("All same elements:");
let rotateSame = [2, 2, 2, 2];
console.log("Before:         ", rotateSame.join(", "));
rotate(rotateSame, 2);
console.log("Expected After:  2, 2, 2, 2");
console.log("Actual After:   ", rotateSame.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation with k larger than array size
// ------------------------------------
console.log("k larger than array size:");
let rotateLargeK = [1, 2];
console.log("Before:         ", rotateLargeK.join(", "));
rotate(rotateLargeK, 3);
console.log("Expected After:  2, 1");
console.log("Actual After:   ", rotateLargeK.join(", "));
console.log("---------------");
