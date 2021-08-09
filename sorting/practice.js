const mergeTwo = (arr1, arr2) => {
  let array = arr1.concat(arr2);
  return mergeSort(array);
};
/*
this function is necessary^ due to the recursive call. It allows us to concat the array and not have to worry about concatentation affecting the base case or the 
recursive call.
*/
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return helperFunction(mergeSort(left), mergeSort(right));
};

const helperFunction = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  let results = [...sorted, ...left, ...right];
  console.log(results);
  return results;
};

mergeTwo([1, 4, 2, 6, 3], [5, 6, 3, 2, 7]);
