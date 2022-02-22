const stringCompression = (string) => {
  let str = string.split("");
  let count = 0;
  let hash = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = str[i];
      if (str[i] !== str[i + 1]) {
        count++;
        result += str[i] + count;
        count = 0;
      } else {
        count++;
      }
    } else if (hash[str[i]]) {
      if (str[i] !== str[i + 1]) {
        count++;
        result += str[i] + count;
        count = 0;
      } else {
        count++;
      }
    }
  }
  if (result.length > str.length) {
    console.log(result);
    return str;
  } else {
    console.log(result);
    return result;
  }
};

stringCompression("aabcccccaaa");
stringCompression("hhttzzs");

/*
Q: given a string, compress it to count the number of characters it has and return the order. If the compressed string is longer than the original string length, return the original string. 


Example: "aabbcccccaaa" => "a2b2c5a3"

1. create a hash 
2. frequency counter 
    -if the letter doesn't exist, push it into the string 
    
*/
