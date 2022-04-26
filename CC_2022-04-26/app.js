// Name: Convert number to reversed array of digits


// Directions:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
  n = n.toString().split('').reverse();
  return n.map(str => Number(str));
}

// Converted integer to string
// Split it into an array
// Reversed the order
// Used map() to convert each element into a number
