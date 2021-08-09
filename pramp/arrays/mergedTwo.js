const mergeTwo = (arr1, arr2) => {
  let array = [];
  let c1 = 0;

  console.log(array);
};

mergeTwo([1, 2, 3], [1, 2, 3]);

/*
Q) 
  -given two sorted arrays, return an array that is merged from the two. 

  ex: [1,2,5], [1,4,8] => [1,1,2,4,5,8]

  approach: 
    -easiest: concat both arrays and sort it (mergesort or quicksort)
    -another way: 
          -loop through the both arrays while the length is less than a counter made for each. 
              -if the arr1 value is less than arr2, push in arr1, else arr2
              -return new array  that is a concatentation of both arrays

*/
