/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/*
plan: 
R: given an array and a target, return the indices from least to greatest. 
P: loop through the array and apply logic of subtracting the target from each iteration.
create a new array and push. 
sort. 
*/

const practiceFunc = (array, target) => {
  // let array = array.sort();
  // ^you cannot sort the array
  let newArr = [];
  let hash = {};
  for (let i of array) {
    hash[i] = i;
  }
  for (let i = 0; i < array.length; i++) {
    let compliment = target - array[i];
    if (compliment in hash) {
      newArr.push(i);
    }
  }
  console.log(newArr);
};

// practiceFunc([2, 7, 11, 15], 9);
practiceFunc([3, 2, 4], 6);
// practiceFunc([3, 3], 6);
// practiceFunc([3, 2, 3], 6);
