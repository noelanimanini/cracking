/*
An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word “crime”
*/

const decrypt = (word) => {
  let current;
  let arr = [];
  let first = word[0].charCodeAt(0);
  let ans = "";

  for (let i = 0; i < word.length; i++) {
    current = word[i].charCodeAt(0);
    arr.push(current);
  }
  let val;
  for (let i = arr.length - 1; i >= 0; i--) {
    val = arr[i] - arr[i - 1];
    if (isNaN(val)) {
      val = first - 1;
      ans += String.fromCharCode(val);
    } else {
      while (val < 97) {
        val = val + 26;
      }
      ans += String.fromCharCode(val);
    }
  }
  console.log(ans);
};

/*
Q) given a word, loop through it and decrypt it. Return the decrpytion. 

ex: "dontq" => "crime" 
     
crime => dontq
1. take convert to ascii values
2. add 1 to the first letter 
3. incrementally add the previous value to the next value 
4. return the encryption. 

REVERSE: 
4. decrement from the last letter to the beginning 
5. take the last letter, subract it from the next and while that ascii value is less than 97, add 26 to it and convert it to a letter 

*/

decrypt("dontq");
