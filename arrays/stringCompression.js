const stringCompression = (string) => {
  let str = string.split("");
  let count = 0;
  let hash = {};
  let result = "";
  for (let ele of str) {
    if (!hash[ele]) {
      hash[ele] = 1;
      if (str[ele + 1] == str[ele]) {
        count++;
        result += ele;
        result += count;
      } else if (str[ele + 1] !== str[ele]) {
        count++;
        result += count;
        count = 0;
      }
    } else if (hash[ele]) {
      result += ele;
      hash[ele]++;
      if (str[ele + 1] == str[ele]) {
        count++;
        result += count;
      } else if (str[ele + 1] !== str[ele]) {
        count++;
        result += count;
      }
      count = 0;
    }
  }
  console.log(result);
};

stringCompression("aabcc");

/*
Q: given a string, compress it to count the number of characters it has and return the order. If the compressed string is longer than the original string length, return the original string. 


Example: "aabbcccccaaa" => "a2b2c5a3"

1. create a hash 
2. frequency counter 
    -if the letter doesn't exist, push it into the string 
    
*/
