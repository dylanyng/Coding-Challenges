// Name: Sum of Digits / Digital Root


// Instructions:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2



function digitalRoot(n) {
  // Function: separate number into an array of single digits
  const makeArray = i => String(i).split('').map(x => Number(x));

  // Call makeArray on n
  let arr = makeArray(n);

  // Add all numbers in array together until we get a single number
  while (arr.length > 1) {
    arr = makeArray(arr.reduce((p, a) => p + a, 0));
  }

  // Return the single-element array as a number 
  return Number(arr);
}