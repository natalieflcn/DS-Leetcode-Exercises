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

// ------------------------------------
//  Test array with positive numbers
// ------------------------------------
let arrPos = [1, 2, 3, 4, 5];
console.log("Test array with positive numbers:");
console.log("Array:", arrPos); // Should print: [1, 2, 3, 4, 5]
let resultPos = findMaxMin(arrPos);
console.log("Max and Min:", resultPos); // Should print: [5, 1]
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNeg = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Array:", arrNeg); // Should print: [-1, -2, -3, -4]
let resultNeg = findMaxMin(arrNeg);
console.log("Max and Min:", resultNeg); // Should print: [-1, -4]
console.log("---------------");

// ------------------------------------
//  Test array with both positive and negative numbers
// ------------------------------------
let arrMixed = [-1, 0, 1];
console.log("Test array with both positive and negative numbers:");
console.log("Array:", arrMixed); // Should print: [-1, 0, 1]
let resultMixed = findMaxMin(arrMixed);
console.log("Max and Min:", resultMixed); // Should print: [1, -1]
console.log("---------------");

// ------------------------------------
//  Test array with all same numbers
// ------------------------------------
let arrSame = [2, 2, 2, 2];
console.log("Test array with all same numbers:");
console.log("Array:", arrSame); // Should print: [2, 2, 2, 2]
let resultSame = findMaxMin(arrSame);
console.log("Max and Min:", resultSame); // Should print: [2, 2]
console.log("---------------");

// ------------------------------------
//  Test array with one number
// ------------------------------------
let arrOne = [7];
console.log("Test array with one number:");
console.log("Array:", arrOne); // Should print: [7]
let resultOne = findMaxMin(arrOne);
console.log("Max and Min:", resultOne); // Should print: [7, 7]
console.log("---------------");

// ------------------------------------
//  Test array with decimals
// ------------------------------------
let arrDec = [1.5, 2.5, 0.5];
console.log("Test array with decimals:");
console.log("Array:", arrDec); // Should print: [1.5, 2.5, 0.5]
let resultDec = findMaxMin(arrDec);
console.log("Max and Min:", resultDec); // Should print: [2.5, 0.5]
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZero = [0, 0, 0];
console.log("Test array with zeros:");
console.log("Array:", arrZero); // Should print: [0, 0, 0]
let resultZero = findMaxMin(arrZero);
console.log("Max and Min:", resultZero); // Should print: [0, 0]
console.log("---------------");
