const questionFour = () => {
    let result; 
    let i = 1 
    let first = 900
    let second = 900 
    // while ( i < 1000) {
    //     let product = first * first+i
        
    //     if (product === Number(product.toString().split().reverse())) {
           
    //         result = product
    //         break
    //     }
    //     i++
    // }
    
    let j = 1
    let k = 1 
    // while (first < 1000 && second < 1000) {
    //     let product = (first+j) * (second+k) 
     
    //     let num = Number(product.toString().split("").reverse().join(''))
    //    if (product === num) {
    //     result = product
    //     break;
    //    }
    //     k++
    //     j++
    // }
    // console.log(result)
    // return result

    while (first < 1000 && i <= 100) {
        
        while (second < 1000 && j <= 100) {
            let product = (first+i)* (second+j)
            // console.log("backwards "+Number(product.toString().split().reverse()))
            // console.log("forwards "+product)
            if (product === Number(product.toString().split("").reverse().join(''))) {
                        result = product
                        
                    }
            // console.log("j "+j )
            // console.log("i " + i )
            j++
            i++
                }
    }
    console.log("result "+result)
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