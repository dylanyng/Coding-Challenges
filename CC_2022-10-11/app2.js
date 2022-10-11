// Name: Shortest Word

// Instructions:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


// function findShort(s){
//   const myArr = s.split(' ')
//   return myArr.sort( function( a, b ) { return a.length - b.length})[0].length
// }

function findShort(s){
  const splitStr = s.split(' ');
  return (splitStr.sort(( a, b ) => a.length - b.length)[0].length)
}

console.log(findShort('Hello my dear cousin'))