//Q: given an array of array of words, how do you count the length of each word? 
var array = [["word"],["this is some thing that I understand!"]] 

/*
Q: given an array of array of words, I have to count the number of words in each sub array and return the count 
edge cases: 
- do I have to worry about special characters? Y
- is there a limit to how many words there are in a sub array? N
- do I have to worry about the count resetting? What about pushing the current count into the array? 

method: 
- create a variable to keep track of the count 
- loop through the array 
- at each iteration, filter the current iteration for special characters using regex 
- once filtered, grab the resultant length and += add it into the count variable
-return the count 
*/

const countWords = (array) => {
   
    // for (let i=0; i < array.length; i++) { o(n)
    //     let current = array[i].toString().replaceAll(/[^a-zA-Z ]/ig, '').split(" ") o(n)
    //     count += current.length
    //     ans.push(count)
    //     count = 0 
    // }
    // console.log(ans)
    // return ans 
    //time complexity would be o(n2) 

    //space complexity would be o(1) vs o(n) 
}

countWords(array)