// Name: List Filtering

// Directions: 
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



function filter_list(l) {

  // Create an new, empty array
  let noNums = [];

  // Create a loop based on the length of the argument's length
  for (let i = 0; i < l.length; i++) {

    // If the specififed element in the argument's array is a number, add it to the new array
    if (typeof(l[i]) === 'number') {
      noNums.push(l[i]);
    } 
  }

  // Return the array we created
  return noNums;
}