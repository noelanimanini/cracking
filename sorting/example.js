/*
Q) given a string that has the character "<", remove this character if it exists. 
if it doesnt exist, the original string 

*/

const removeString = (str) => {
  //assign a variable and split the string
  let ans = str.split("");
  //loop over the string and provide logic: if the curr[i] is === "<", remove. "<", "" using the .replace
  //create a variable that represents what I want to replace
  let rightBracket = /<>/gi;
  //
  let result = ans.replace(rightBracket, "");
  //return result
  return result;
};

removeString("string<");

//Q) given an array of numbers, return an array of multiplied numbers by two.

const multiplyNums = (nums) => {
  //let variable for ans
  let ans = nums.map((x) => {
    x * 2;
  });
  return ans;
};

multiplyNums([1, 2, 3]);
