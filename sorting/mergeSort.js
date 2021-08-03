const merge = (array) => {
  //base case: if the array length is just 1, return it.
  if (array.length <= 1) return array;

  //find the middle of the array (average)
  let middle = Math.floor(array.length / 2);
  //find the left using slice
  let left = array.slice(0, middle);
  //find the right using slice
  let right = array.slice(middle);

  //return the helper function with the recursive call of merge left and right to
  //continuously divide the arrays until they have a length of 1
  return helperFunction(merge(left), merge(right));
};

function helperFunction(left, right) {
  //create a parent array
  const parentArray = [];

  //while the left and right length are still true,
  while (left.length && right.length) {
    //if the value of the left at index 0 is less than or equal to the
    //value of the right at index 0, then push the left value into the array
    //but also shift it off
    if (left[0] <= right[0]) {
      parentArray.push(left.shift());
    } else {
      //else, push the right value into the parent array
      parentArray.push(right.shift());
    }
  }
  //concat everything together. The parent array and everything left over in the
  //left and right
  //the concatentation allows for the largest element left over to be pushed into the
  //sorted parent array. either left or right is empty, so it doesn't matter
  //because the empty array will be ignored.
  let results = [...parentArray, ...left, ...right];

  //return the results!
  return results;
}

merge([11, 5, 3, 7, 8, 3, 2]);
