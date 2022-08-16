// Name: Replace With Alphabet Position


// Instructions: 
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



function alphabetPosition(text) {
  // Array of alphabet for checking index
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // Convert argument to lower case, then array, map array and return the index of each element and add 1
  text = text.toLowerCase().split('').map(x => alphabet.indexOf(x) + 1);

  // Map array again, if element is equal to zero, replace with null, then filter out and join to a String
  text = text.map(x => x === 0 ? null : x).filter(Boolean).join(' ');
  
  return text;
}