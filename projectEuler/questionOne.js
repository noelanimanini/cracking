const questionOne = (limit) => {
    let sum = 0 
    for (let i=0; i < limit; i++) {
        if (i % 3 === 0) {
            console.log(i)
            sum +=i
        } else if (i % 5 === 0) {
            console.log(i)
            sum += i
        }
    }
    console.log(sum)
    return sum
}

questionOne(1000)

// https://projecteuler.net/problem=1
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/ 

