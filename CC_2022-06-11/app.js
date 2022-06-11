// Name: String Ends With?


// Directions: 
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// Arrow function accepts two parameters
// Checks if the ending parameter is in the str parameter
// Specifically looks at the last characters in the str argument based on the ending argument's length
// Returns True or False based on the result
let solution = (str, ending) => str.includes(ending, str.length - ending.length);