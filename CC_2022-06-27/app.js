// Name: Find the odd int


// Directions: 
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// Solution:
// Create an arrow function that finds the occurences of a given element
// Loop through all elements, if an element is odd, return that element
function findOdd(A) {
  let countOccurences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  for (let i = 0; i < A.length; i++) {
    let occurence = countOccurences(A, A[i]);
    if (occurence % 2 !== 0) {
      return A[i];
    }
  }
}