// Name: Break camelCase


// Instructions:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  const strArr = string.split('');
  let solution = [];

  for (let i = 0; i < strArr.length; i++) {
    const el = strArr[i];
    el === el.toUpperCase() ? solution.push(' ' + el) : solution.push(el);
  }
  
  return solution.join('')
}