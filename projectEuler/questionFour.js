const isPalindrome = (value) => {
    let reversed = Number(value.toString().split('').reverse().join(''))
    return reversed === Number(value)
}

const questionFour = () => {

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