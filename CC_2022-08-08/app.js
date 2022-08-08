// Name: Isograms


// Description: 
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str) {
  const arr = str.toUpperCase().split('');
  let val = true;
  for (let i = 0; i < arr.length; i++) {
    const secondArr = str.toUpperCase().split('');
    secondArr.splice(i, 1)
    if (secondArr.includes(arr[i]) == true) {
      val = false;
    } 
  }
  return val;
}