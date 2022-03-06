const questionThree = (number) => {
    let array = []
    for (let i=0; i <= number; i++) {
        if (number % i === 0) {
            array.push(i)
            array.push(number / i)
        }
    }
    console.log(array)
    grabHighestNum(number)
    // return array

}

const grabHighestNum = ( number) => {
    let highest; 
    let i=0
    let result = []
    while (number % 2 === 0) {
        number = Math.floor(number/2)
    }

    for (let i=3; i < Math.floor(Math.sqrt(number)); i = i+2) {
        while (number % i == 0) {
            number = Math.floor(number/i)
        }
    }
    if (number > 2 ) {
        highest = number
    }
    
    // while (array[i] <= highest) {
    //     result.push(array[i])
    //     i++
    // }
    console.log(highest)
    // questionThree(highest, number)
}

// const questionThree = (highest, number) => {
//     let array = []
//     for (let i=1; i <= highest; i++) {
//     //    console.log(i)
//         if (highest % i === 0) {
//             array.push(i)
//         }
//     }
//     console.log(array)
  
    // return array

// }

// const helperPrime = (num) => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
 
//     return num > 1;
   
// }
grabHighestNum(600851475143)
// questionThree(600851475143)

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/ 

// https://projecteuler.net/problem=3