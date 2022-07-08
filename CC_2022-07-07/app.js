// Name: Mumbling


// Directions: 
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// Create an empty array
// Loop as many times as there are characters in the argument
// Each loop, push that index's character in teh appropriate format to the array
// Return the array, joined with '-'
function accum(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(`${s[i].toUpperCase()}` + `${s[i].toLowerCase().repeat(i)}`)
  }
  return result.join('-');
}