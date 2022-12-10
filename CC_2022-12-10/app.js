// Name: Split Strings


// Instructions:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
  // Split str into an array
  const strArr = str.split('');
  // Create an empty array for the return value
  let splitArr = [];
  
  //// Loop through the str array
  for (let i = 0; i < strArr.length; i += 2) {
    // Push values from string array to split array, if next character is undefined, add '_'
    splitArr.push(strArr[i + 1] === undefined ? strArr[i] + '_' : strArr[i] + strArr[i+1])
  }
  
  // Return solution
  return splitArr;
}