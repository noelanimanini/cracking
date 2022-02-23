const firstReverse=(word) => {
    let result = ""
    let str = word.split("")
    for (let i=str.length-1; i >= 0; i--){
        let cur = str[i]
        console.log(str[i])
        result += cur

    }
    console.log(result)
    return result 
}

firstReverse("coderbyte")
firstReverse("I Love You")

/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/ 