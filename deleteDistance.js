function deletionDistance(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return 0;
  if (str1.length <= 2 && str2.length <= 2) return str1.length;

  if (str1.length > 0 && str2.length === 0) {
    return str1.length;
  } else if (str2.length > 0 && str1.length === 0) {
    return str2.length;
  }

  let diff = 0;

  if (str1.length === str2.length) {
    let second = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[second]) {
        diff += 2;
      }
      second++;
    }
    return diff;
  } else if (str1.length !== str2.length) {
    const longest = str1.length > str2.length ? str1 : str2;
    const shortest = str1.length > str2.length ? str2 : str1;
    let c1 = 0;
    let c2 = 0;

    while (c1 < longest.length && c2 < shortest.length) {
      if (longest.charAt(c1) !== shortest.charAt(c2)) {
        if (c1 !== c2) {
          c1++;
          diff += 2;
        } else {
          // c1++
          diff += 2;
        }
      }
      c1++;
      c2++;
    }
  }

  return diff + 1;
}

// deletionDistance("hot", "not")
// deletionDistance("some", "thing")
// deletionDistance("adbc", "abc")
// deletionDistance("awesome", "awesome")
// deletionDistance("ab", "ba")
deletionDistance("heat", "hit");
