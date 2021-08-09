/*
given an array and a target value, return a new array of subarrays of three values within the array that add up to the target sum 

ex: [1,2,4,3,6,7,8,9,10] target: 7 => [[1,2,4]]

questions: 
  -duplicates in the array? what is the target value is in the array? Is this something I should worry about 

approach: 
  -using the two pointer approach, I will be designating a left, a right and a middle. If the sum of these three things
  adds up to the target value, I will increment both pointers, else, left, else if right
 o(n)
*/

const three = (array, target) => {
  //sort the array
  let sorted = array.sort((a, b) => a - b);

  let parent = [];
  //loop through the sorted array
  for (let i = 0; i < sorted.length; i++) {
    //create the pointers
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      //make sure this current is in the while loop, this is an issue of scope
      let current = sorted[i] + sorted[left] + sorted[right];
      if (current === target) {
        parent.push([sorted[i], sorted[left], sorted[right]]);
        //increment both pointers here
        left++;
        right--;
      } else if (current < target) {
        left++;
      } else if (current > target) {
        right--;
      }
    }
  }
  console.log(parent);
  return parent;
};

three([12, 3, 1, 2, -6, 5, -8, 6], 0);
