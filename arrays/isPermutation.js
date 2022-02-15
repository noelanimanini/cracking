const isPermutation = (a, b) => {
  let hash = {};
  let cur = a.split("");
  let cur2 = b.split("");
  let ans = true;
  for (let ele of cur) {
    hash[ele] ? hash[ele]++ : (hash[ele] = 1);
  }

  for (let ele of cur2) {
    hash[ele] ? hash[ele]++ : (hash[ele] = 1);
  }

  Object.values(hash).forEach((x) => {
    console.log("this is x" + x);
    if (x % 2 === 1) {
      ans = false;
    } else {
      ans = true;
    }
  });
  console.log(hash);
  console.log(ans);
  return ans;
};

isPermutation("god", "dog");

/*
R: Given two strings, determine if the two strings are permutations of each other (if the two strings have the same characters).

(bac + cab) => True

Q: will both words always be the same length? []

M: Create a hash for both words and store it. If the value in the hash is even, then the permutation is true, otherwise is there is a value for a key value pair that is odd, that it is false

*/
