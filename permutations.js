const inUnique = (string) => {
  let ds = {};
  let result = string.split("");

  for (let ele of result) {
    ds[ele] = (ds[ele] || 0) + 1;
  }
  let ans;
  Object.values(ds).forEach((x) => {
    if (x === 1) {
      ans = true;
    } else {
      ans = false;
    }
  });

  return ans;
  // let result = string.split("").sort()
  // let counter = 0
  // console.log(result)
  // for (let i=0; i < result.length; i++) {
  //   if (result[i] === result[i+1]) {
  //     counter++
  //   }
  // }

  // if (counter >= 1) {
  //   return false
  // } else {
  //   return true
  // }
};

inUnique("gilbert");
