// Name: Vowel Count


// Directions: 
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let vowelsCount = 0;

  // Array of vowels to iterate over
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Loop over each character in the given string for the length of the string
  for (let i = 0; i < str.length; i++) {

    // Loop through our vowel array to check each element against the current character in the string argument
    vowels.forEach(element => {

      // If an element in our string array matches a character in the string, add 1 to the vowelsCount variable
      if (element === str.charAt(i)) {
        vowelsCount += 1;
      }
    });
  }
  
  // Return the result
  return vowelsCount;
}

