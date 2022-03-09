const isPalindrome = (value) => {
    let reversed = Number(value.toString().split('').reverse().join(''))
    return reversed === Number(value)
}

const questionFour = (n) => {
    let highest = 0
    let largestNum = 999
    // largestNum += Number(largestNum.repeat(n-1))
    // largestNum = Number(largestNum)

    for (let i=largestNum; i > 0; i--) {
        for (let j=largestNum; j > 0; j--) {
            // console.log(j)
            let product = i * j
            if (isPalindrome(product)) {
                if (product > highest) {
                    highest = product
                    break;
                }
            }
        }
    }
    console.log(highest)
    return highest
}

questionFour(3)

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