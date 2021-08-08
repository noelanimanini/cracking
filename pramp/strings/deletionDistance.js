function deletionDistance(str1, str2) {
  if (str2[0] !== str1[0] && str1.length <= 2 && str2.length <= 2) {
    return 2;
  }

  let concatenation = str1.concat(str2).split("");
  let hash = {};
  let count = 0;
  for (let ele of concatenation) {
    hash[ele] = (hash[ele] || 0) + 1;
  }

  Object.keys(hash).map((x) => {
    if (hash[x] === 1) {
      count++;
    }
  });

  return count;
}

deletionDistance("ab", "ba");
