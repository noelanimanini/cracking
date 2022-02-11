// https://leetcode.com/problems/sum-of-two-integers/
/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.
*/

/*
R: given two integers, x and y, return the sum without using operators. 
P: could we use parseInt? Use the greater than or less than operator

*/

// const SumofTwoNumbers = (a, b) => {
//   let array = [];
//   if (a > 0) {
//     for (let i = 0; i <= a; i++) {
//       array.push(i);
//     }
//   } else if (a < 0) {
//     console.log(a);
//     for (let i = 0; i <= a; i++) {
//       console.log(i);
//     }
//   }
//   if (b > 0) {
//     for (let i = 0; i <= b; i++) {
//       array.push(i);
//     }
//   } else if (b < 0) {
//     for (let i = 0; i <= b; i--) {
//       array.pop();
//     }
//   }
//   // console.log(array);
//   return array.length;
// };

const SumofTwoNumbers = (a, b) => {
  while (b != 0) {
    let remainder = a & b;
    console.log(remainder);
    a = a ^ b;
    console.log("this is a", a);
    b = remainder << 1;
  }
  console.log(a);
  return a;
};

// SumofTwoNumbers(2, 3);
SumofTwoNumbers(-1, 1);
