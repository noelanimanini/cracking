const palindromePermutation = (string) => {
  const ans = string.toLowerCase().trim().split("");
  let result = ans.filter((x) => x !== " ");
  let ds = {};
  let count = 0;

  for (let ele of result) {
    ds[ele] = (ds[ele] || 0) + 1;
  }
  console.log(ds);

  Object.keys(ds).forEach((x) => {
    count += ds[x];
  });

  if (count % 2 === 1) {
    return true;
  } else {
    return false;
  }
};

palindromePermutation("kaayk");
//doesn't work for 'never odd or even'
