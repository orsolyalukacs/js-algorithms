// Freecodecamp Basic Algorithm Scripting #5

function largestOfFour(arr) {
  return arr.map(el => Math.max(...el));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

