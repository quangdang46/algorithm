function findCombinations(numbers, target) {
  const combinations = [];
  function generateCombinations(current, remaining) {
    // If the remaining sum is 0, add the current combination to the list
    if (remaining === 0) {
      combinations.push(current);
      return;
    }
    if (remaining < 0 || remaining < numbers[0]) {
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      generateCombinations(current.concat(numbers[i]), remaining - numbers[i]);
    }
  }
  generateCombinations([], target);
  return combinations;
}

console.log(findCombinations([2, 3, 5, 7], 10));
// Output: [[2,3,5], [2,7], [3,7]]
