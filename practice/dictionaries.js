const dictionaries = (str) => {
    // create the hash
 let hash = {}
 //split the string
 str = str.split(", ")
 //initialize a variable to equal the number of spaces allowed in the hash
 let lines = str[0]
//  create a for loop that starts at 1, doubles the number of spaces available, and increments + 2 to 1 
 for (let i=1; i < lines*2; i= i+2) {
    //  create the hash sam : 99912222
    hash[str[i]] = str[i+1]
 }
 console.log(hash)
//  create a for loop that initializes a variable that starts at "3" * 2 + 1 = 7, increment to the string length (9), increment by 1
 for (var j = lines*2 + 1; j < str.length; j++){
     //if the string (sam) is in the hash
    if (str[j] in hash) {
        // print
        console.log(str[j] + '=' + hash[str[j]])
    }
//if it isn't, print as well 
    else {
        console.log('Not found' + str[j])
    };
}
}
dictionaries("3, sam, 99912222, tom, 11122222, harry, 12299933, sam, edward, harry")