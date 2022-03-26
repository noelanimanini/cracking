const lengthOfLongestSubstring = (s) => {
    //create a hash to store the unique characters      
    let uniqueCharacters = {};
//     the final count
    let recordCount = 0
//     continuous count
    let count = 0;
//     
    let start = 0;

    for (let i = start; i < s.length; i++) {
//         loop through the string starting at 0 (start)
        if (!uniqueCharacters[s[i]]) {
//             if there is no unique characters
            uniqueCharacters[s[i]] = true;
//             set the unique characters in the hash to true
            count++;
//             increment the count++
            recordCount = Math.max(recordCount, count);
//             find the max count 
        } else {
//             else if the character is in the hash already, 
            count = 0;
//             set the count = 0 
            uniqueCharacters = {};
//             reset the hash
            start++;
//             increment the start value 
            i = start - 1;
//             the current iteration is the start value minus 1
        }
    }
// return the record count 
    return recordCount;
};
/*  */
