const practice = (n) => {
    let cur = 0 
    let product = 1
    let sum = 0 
    let first = n.toString().split("")

    for (let i=0; i < first.length; i++) {
        product *= Number(first[i])

        console.log("this is the "+product)
        
        sum += Number(first[i])
    }

    let result = product - sum

    console.log(result)
    
}

practice(234)

/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

M: turn it into a string and split it? 
*/ 