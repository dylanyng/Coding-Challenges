// Name: Take a Ten Minutes Walk


// Directions: 
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).



function isValidWalk(walk) {

  // Create an object containing the number of occurences of each direction
  const dirKey = {};
  for (const dir of walk) {
    dirKey[dir] = dirKey[dir] ? dirKey[dir] + 1 : 1;
  }

  // Create some variables for easier reading
  // One of which being the value we will return, set to true (ontTime)
  let onTime = true;
  const blocks = walk.length;
  const north = dirKey['n'];
  const south = dirKey['s'];
  const east = dirKey['e'];
  const west = dirKey['w'];

  // Change onTime to false under these circumstances, otherwise it will remain true
  if (north !== south) {
    onTime = false;
  } else if (east !== west) {
    onTime = false;
  } else if (blocks % 2 !== 0 || blocks > 10 || blocks < 10) {
    onTime = false;
  }

  // Return the boolean
  return onTime;
}