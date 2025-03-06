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
