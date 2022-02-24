const repeatedString = (s, n) => {
    const min = 1;
    const maxs = 100;
    const maxn = 1000000000000;
    let as = s.split('').filter(i => i === "a").length;
    console.log("this is as "+as)
    if (typeof s === "string"
         && s.length >= min
         && s.length <= maxs
         && n === parseInt(n, 0)
         && n >= min
         && n <= maxn) {
             console.log(parseInt(n / s.length, 0) * as) 
             console.log((s.slice(0, (n % s.length)).split('').filter(i => i === "a").length)) 
         as = (parseInt(n / s.length, 0) * as) + (s.slice(0, (n % s.length)).split('').filter(i => i === "a").length);
    }
    console.log(as)
    return as; 
 }
//  https://www.geeksforgeeks.org/count-occurrences-of-a-character-in-a-repeated-string/


// repeatedString("aba", 10)
// repeatedString("abcac", 10)
repeatedString("a", 1000000000000)

// There is a string,s , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

/*
Q: given a substrng and a number, repeated the substring the number of n times. Specifically, n=10. The substring is "abcac", the substring will repeat twice for a total of 10 characters. "abcacabcac".length = 10

Method: 
take the string, split it... "aba" => ["a", "b", "a"]
use a while loop to state the logic, "while the substring original length is less than the given number, [continue to add to the end of substring the first character and second and so on and so forth...]=> this might be a for loop. 

While the while loop breaks, loop through the substring again and count the number of "a"."

*/ 