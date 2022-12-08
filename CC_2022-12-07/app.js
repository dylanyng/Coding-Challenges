// Name: Convert string to camel case


// Instructions:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){
  let strArr = str.split(/[-\s_]+/);
  let finalArr = [];
  
  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if (str == '') {
      return '';
    } else if (i === 0 && word[0] == word[0].toLowerCase()) {
      finalArr.push(word.toLowerCase())
    } else if (i === 0 && word[0] == word[0].toUpperCase()) {
      finalArr.push(word.replace(word[0], word[0].toUpperCase()))
    } else {
      finalArr.push(word.replace(word[0], word[0].toUpperCase()))
    }
  }
  
  return finalArr.join('');
}