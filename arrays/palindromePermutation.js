/*
Given a string, write a function to check if it is a permutation of a palindrome. 
*/

const palindromePermutation = (string) => {
  // split the string and take out all the spaces, lowercase it as well.
  let str = string.replaceAll(/\s/g, "").toLowerCase().split("");
  // create the hash
  let hash = {};
  let even = 0;
  let odd = 0;
  let result;
  // create the frequency counter
  for (let ele of str) {
    hash[ele] ? hash[ele]++ : (hash[ele] = 1);
  }
  console.log(hash);
  // loop through the hash and create logic for each value.... if it is even, then increment a counter.
  Object.values(hash).map((x) => {
    if (x % 2 == 1) {
      odd += 1;
    }
  });

  if (odd === 1) {
    result = true;
  } else if (odd === 0) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return result;
  //if there is only one odd number or if every value is even, return true
  // console.log(Object.values(hash).some(helper));
  // console.log(str.length);
};

palindromePermutation("Kkaya");

/*
Q: Given a string, determine if it is a palindrome, if it is, return true. 

M: Lowercase the string completely. Create a Hash to store the frequency of each letter. Store the values inside. 
A palindrome can have one letter be odd and the rest be even, or the entire palindrome has an even number of letters...

{ t: 2,
  a: 2,
  c: 2,
  o: 1
} => True 

1. create the hash
2. create the frequency counter 
3. loop through the hash and create logic that states if all values are even, return true, if there is one value in a key-value pair that is odd, return true
4. else false 

*/
