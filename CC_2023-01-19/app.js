// Name: WeIrD StRiNg CaSe


// InstrWrite a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


function toWeirdCase(string){
  const arr = string.split(' ');
  let solution = [];

  for (let i = 0; i < arr.length; i++) {
    let wordArr = arr[i].split('');
    let newWord = [];
    wordArr = wordArr.map((x,i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase());
    newWord.push(wordArr.join(''));
    solution.push(newWord.join(''));
  }

  return solution.join(' ');
}
