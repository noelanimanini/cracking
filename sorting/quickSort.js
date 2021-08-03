function quickSort(array) {
  //base case
  if (array.length <= 1) return array;

  // let pivotIndex = Math.floor(array.length / 2);
  //grab the first element in the array to be the pivot
  let pivot = array.shift();
  //initialize two empty arrays
  let less = [];
  let greater = [];

  //loop through the array
  for (let i in array) {
    //assign and initialize array values to a variable
    const values = array[i];
    //if the current value is less than or equal to the pivot, then push the less than or equal to value to the less array else, the greater array
    values <= pivot ? less.push(values) : greater.push(values);
  }

  console.log([...quickSort(less), pivot, ...quickSort(greater)]);
  //return the concatenated recursive array using the spread operator.
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

quickSort([3, 5, 4, 2, 2, 9, 8, 77]);
