// https://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript
const isUnique = (str) => {
  let current = str.split("");
  let hash = {};
  let result = true;
  for (let ele of current) {
    hash[ele] ? hash[ele]++ : (hash[ele] = 1);
  }

  for (let ele in hash) {
    if (hash[ele] > 1) {
      result = false;
    }
  }
  console.log(result);
  return result;
};

// isUnique("aba");
// isUnique("ab");
