function quickSort(array) {
  //base case
  if (array.length <= 1) return array;

  //create the first element for the array, and two empty arrays
  let pivot = array.shift();
  let less = [];
  let greater = [];

  //loop through the array
  for (let ele of array) {
    let value = array[ele];
    value <= pivot ? less.push(value) : greater.push(value);
  }

  console.log([...quickSort(less), pivot, ...quickSort(greater)]);
  //return the concatenated recursive array using the spread operator.
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

//Big O is o (n log n). This means that the algorithm is very efficient.

quickSort([3, 5, 4, 2, 2, 9, 8, 77]);
