function findPairsWithGivenDifference(arr, k) {
  let hash = {};
  let array = [];

  for (let ele of arr) {
    hash[ele - k] = ele;
  }
  console.log("hash", hash);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hash) {
      console.log("in array", arr[i]);
      console.log("in hash", hash[arr[i]]);
      array.push([hash[arr[i]], arr[i]]);
    }
  }
  console.log(array);
  return array;
}

//if a difference is found, push it to the hash with the value of the difference

findPairsWithGivenDifference([0, -1, -2, 2, 1], 1);
// findPairsWithGivenDifference([4, 1], 3);
