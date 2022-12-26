function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  const merged = [];
  // While there are elements in both arrays
  while (left.length > 0 && right.length > 0) {
    // Compare the first elements of each array
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  while (left.length > 0) {
    merged.push(left.shift());
  }
  while (right.length > 0) {
    merged.push(right.shift());
  }

  // Return the merged array
  return merged;
}
