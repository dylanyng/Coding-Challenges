// Name: Count characters in your string

// Instructions:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
  const strArray = string.split('');
  let solution = {};

  for (let i = 0; i < strArray.length; i++) {
    const letter = strArray[i];
    letter in solution === true ? solution[letter] += 1 : solution[letter] = 1;
  }

  return solution;
}