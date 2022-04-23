// Name: Abbreviate a Two Word Name


// Directions:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name){
  let nameArr = name.split(' ');
  let first = nameArr[0].split('')[0];
  let last = nameArr[1].split('')[0];
  return (first + '.' + last).toUpperCase();
}