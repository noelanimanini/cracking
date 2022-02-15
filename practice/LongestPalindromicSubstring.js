// Given a string s, return the longest palindromic substring in s.
/*
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/

/*
given a string iterate through the string. create a variable to save each iteration to. 
**Somehow need to place the logic that the first and last iteration have to be the same.
https://www.youtube.com/watch?v=y2BD4MJqV20&ab_channel=NickWhite
*/

const longestPalindromicSubstring = (a) => {
  let ans = "";
  let current = a;
  let i = 0;
  let j = 1;
  // while the length is not 0
  while (current.length !== 0) {
    // assign cur to be the current iteration
    let cur = current[i];
    // if cur is not equal to the next iteration,
    if (cur !== current[j]) {
      console.log(cur);
      //increase j by 1
      j++;
      // increment ans to the current iteration
      ans += cur;
    } else {
      console.log("this is " + ans);
      return ans;
    }
    // ++ by 1
    i += 1;
    // take off current one by one to break the while loop;
  }
  return ans;
};

longestPalindromicSubstring("babad");
