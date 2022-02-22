// const rotateMatrix = (matrix) => {
//     let result = []
//     let zero = []
//     let one = []
//     let two = []
//     for (let ele of matrix) {
        
//         if (ele[0]) {
//             zero.push(ele[0])
//             // zero.reverse()
           
//         } 
        
//          if (ele[1]) {
//             one.push(ele[1])
//             // one.reverse()
//         } 
//          if (ele[2]) {
//             two.push(ele[2])
//             // two.reverse()
//         }
//     }
//     result.push(zero.reverse(), one.reverse() , two.reverse())
//     console.log(result)

// }

function rotate(matrix) {          // function statement
    const N = matrix.length - 1;   // use a constant
    // use arrow functions and nested map;
    const result = matrix.map((row, i) => 
         row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;       // hold original array reference
    matrix.push(...result);  // Spread operator
    console.log(matrix)
    return matrix;
}
// rotate([[1,2,3],[4,5,6],[7,8,9]])
rotate([[1,2],[3,4]])

/*
Question: Given a matrix, create a function that can rotate it 90 degrees. 

ex: [1,2,3],[4,5,6],[7,8,9] => [7,4,1],[8,5,2], [9,6,3]

Method: 
1. create a new array 
2. loop through the matrix (i = [1,2,3])
3. grab the 0,1 and 2 index of each iteration
4. push it into a new array and push that into the resultant array
return the result
*/ 