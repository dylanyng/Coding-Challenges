// Name: Your order, please


// Instructions:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
  // Make array from words argument
  const wordsArr = words.split(' ');

  // Make empty array that we will be returned as our solution
  let sortedArr = [];

  // Make variable to be used to find the next element
  let num = 1;

  // Loop until the length of the solution array is equal to the length of the argument array
  while (wordsArr.length > sortedArr.length) {
    // Find element in argument array that matches num
    const nextElement = wordsArr.filter(word => word.includes(num));
    
    // Push that value to solution array, add 1 to num
    sortedArr.push(nextElement);
    num += 1;
  }

  // Return solution array
  return sortedArr.join(' ');
}