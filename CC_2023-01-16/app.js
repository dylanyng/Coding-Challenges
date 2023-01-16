// Name: Write Number in Expanded Form


// Instructions: 
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


function expandedForm(num) {
  num = String(num).split('');
  const numArray = num.map(x => Number(x));

  let zeroes = numArray.length - 1;
  let solution = [];

  for (let i = 0; i < numArray.length; i++) {
    const currentNum = numArray[i];
    const addZeroes = '0'.repeat(zeroes);
    
    if (currentNum === 0) {
      null;
    } else if (currentNum === 0 && zeroes === 0) {
      solution.push(currentNum);
    } else {
      solution.push(currentNum + addZeroes);
    }
    
    zeroes -= 1;
  }

  return solution.join(' + ');
}