const repeatedString = (str, n) => {
    let cat = str
    let arr = []
    let count = 0
    while (str.length <= n) {
        str += (cat)
    }
    let res = str.split("")
    for (let i=0; i < n; i++) {
        let cur = res[i]
        arr.push(cur)
    }
    
 
    for (let i=0; i < arr.length; i++) {
        let first = arr[i]
        if (first === "a") {
            count++
        }
    }
    console.log(count)
    return count
 }
//  https://www.geeksforgeeks.org/count-occurrences-of-a-character-in-a-repeated-string/


// repeatedString("aba", 10)
repeatedString("abcac", 10)

// There is a string,s , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

/*
Q: given a substrng and a number, repeated the substring the number of n times. Specifically, n=10. The substring is "abcac", the substring will repeat twice for a total of 10 characters. "abcacabcac".length = 10

Method: 
take the string, split it... "aba" => ["a", "b", "a"]
use a while loop to state the logic, "while the substring original length is less than the given number, [continue to add to the end of substring the first character and second and so on and so forth...]=> this might be a for loop. 

While the while loop breaks, loop through the substring again and count the number of "a"."

*/ 