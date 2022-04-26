// Name: Remove String Spaces


// Directions:
// Simple, remove the spaces from the string, then return the resultant string.



let noSpace = x => x.split(' ').join('');


// My original solution. replaceAll was not recognized by codewars
let noSpace = x => x.replaceAll(' ', '');