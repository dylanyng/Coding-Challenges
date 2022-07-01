// Name: Array.diff


// Directions: 
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// As soon as I submitted this, I realized I forgot about .filter()
// :)

function arrayDiff(a, b) {
  let diffArray = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      diffArray.push(a[i]);
    }
  }
  return diffArray;
}