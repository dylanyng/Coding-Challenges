// Name: Fake BigInt64Array


// Directions: 
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



function fakeBin(x){
  x = x.split('');
  x = x.map( x => Number(x))
  
  function convert(num) {
    if (num >= 5) {
      return 1
    } else {
      return 0
    }
  }
  
  return x.map( x => convert(x)).join('');
}

// Split string into an array
// Converted each string into an integer
// Used the map method to run a convert function
// Joined the numbers