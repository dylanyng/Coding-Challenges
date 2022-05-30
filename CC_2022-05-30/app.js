// Name: Square Every Digit


// Directions: 
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  // Split number into an array of strings
  let arr = num.toString().split('');

  // Create a new array that converts each element to a number and squares it
  const val = arr.map(x => Number(x) ** 2);

  // Return the val array with each string converted to a integer and joined to one value
  return Number(val.join(''));
}