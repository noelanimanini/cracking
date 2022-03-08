const questionFour = () => {
    let first = 900
   let result; 
    for (let i=1; i <= 99; i++) {
        // console.log(first + i + j)
        for (let j=1; j <= 99; j++) {
           let product = (first + i ) * first
              
           if (product === Number(product.toString().split("").reverse().join(""))){
            console.log("does this work")
           }
        }

    }
//  console.log(result)
}

questionFour()

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/ 

/*
Q: From two three digit numbers, return the largest palindrome. 

A palindrome is a string or a number that can be read the same way forwards and backwards. Taking into account even and odd numbered lengths. 
EX: "10001", "8008"

___ * ___ = palindrome


*/ 