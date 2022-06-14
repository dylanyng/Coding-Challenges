// Name: Descending Order


// Directions: 
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

 

function descendingOrder(n){
  return Number(String(n).split('').map(Number).sort().reverse().join(''));
}

// Convert n to String
// Split the string into an array
// Map array to convert all elements to an integer
// Sort the array (ascending order)
// Reverse the order
// Join the array to String
// Convert String to Integer

// It may not be pretty, but it works :)