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

// ------------------------------------
//  Test array with increasing prices
// ------------------------------------
console.log("Increasing prices:");
let increasingPrices = [1, 2, 3, 4, 5];
console.log("Array:", increasingPrices);
console.log("Expected Max Profit: 4");
console.log("Actual Max Profit:", maxProfit(increasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with decreasing prices
// ------------------------------------
console.log("Decreasing prices:");
let decreasingPrices = [5, 4, 3, 2, 1];
console.log("Array:", decreasingPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(decreasingPrices));
console.log("---------------");

// ------------------------------------
//  Test array with random prices
// ------------------------------------
console.log("Random prices:");
let randomPrices = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Array:", randomPrices);
console.log("Expected Max Profit: 8");
console.log("Actual Max Profit:", maxProfit(randomPrices));
console.log("---------------");

// ------------------------------------
//  Test array with same prices
// ------------------------------------
console.log("Same prices:");
let samePrices = [2, 2, 2, 2, 2];
console.log("Array:", samePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(samePrices));
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyPrices = [];
console.log("Array:", emptyPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(emptyPrices));
console.log("---------------");

// ------------------------------------
//  Test array with negative prices
// ------------------------------------
console.log("Negative prices:");
let negativePrices = [-1, -2, -3, -4];
console.log("Array:", negativePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(negativePrices));
console.log("---------------");

// ------------------------------------
//  Test array with mixed prices
// ------------------------------------
console.log("Mixed prices:");
let mixedPrices = [1, 4, 2, -1, 6];
console.log("Array:", mixedPrices);
console.log("Expected Max Profit: 7");
console.log("Actual Max Profit:", maxProfit(mixedPrices));
console.log("---------------");
