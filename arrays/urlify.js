/*
Write a method that replaces all the spaces in a string with %20
*/
const urlify = (string) => {
  // let trim = string.trim();
  // let result = trim.replaceAll(" ", "%20");
  // console.log(result);
  let cur = string.split(" ");
  let result = [];
  console.log(cur.length - 1);
  for (let ele in cur) {
    result.push(cur[ele]);
    result.push("%20");
  }
  console.log(result.pop());
  console.log(result.join(""));
};

urlify("Mr John Smith");
