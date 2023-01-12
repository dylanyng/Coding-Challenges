// Name: CamelCase Method

// Instructions:
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord


String.prototype.camelCase=function(){
  const newVar = this.split('');
  let solution = [];
  for (let i = 0; i < newVar.length; i++) {
    let char = newVar[i];
    const prevChar = newVar[i - 1];
    const nextChar = newVar[i + 1];
    if (char[i] === char[0]) {
      char = char.toUpperCase();
    } else if (prevChar === " " && nextChar != " ") {
      char = char.toUpperCase();
    }
    char === " " ? char : solution.push(char);
  }
  return solution.join('');
}