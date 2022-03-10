const questionSix = (arr) => {
    let sumOfSquares = 0
    let squareOfSum = 0
    let diff = 0 
    let sort = arr.sort((a,b) => a-b)
    let highest = sort[1]

    for (let i=1; i <= highest; i++) {
        console.log("i "+ i)
        sumOfSquares += Math.pow(i, 2)
        squareOfSum += i
    }

    diff = Math.pow(squareOfSum, 2) - sumOfSquares
    console.log("diff "+diff)
}

questionSix([1,100])