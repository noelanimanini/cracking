const oneAway = (str, str2) => {
  let foundDifference = false;
  let c1,
    c2 = 0;
  let count = 0;
  //   if (Math.abs(str.length - str2.length) > 1) return false

  //   let s1 = str.length < str2.length ? str : str2
  //   let s2 = str.length < str2.length ? str2 : str

  //   while (c1 < s1.length && c2 < s2.length) {
  //         if (s1.charAt(c1) !== s2.charAt(c2)) {
  //         if (foundDifference) return false
  //          foundDifference = true

  //       if ( s1.length === s2.length) {
  //         c1++
  //       } else {
  //         c1++
  //       }
  //       c2++
  //     }
  //     return true
  //   }
  // }

  if (str.length === str2.length) {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== str2.charAt(i)) {
        count++;
        if (foundDifference) {
          return count;
        }
        foundDifference = true;
      }
    }
    console.log(count);
    return true;
  } else if (str.length + 1 === str2.length) {
    while (c1 < str.length && c2 < str2.length) {
      if (str.charAt(c1) !== str2.charAt(c2)) {
        if (c1 !== c2) {
          count++;
          return false;
        }
        c2++;
      } else {
        c1++;
        c2++;
      }
    }
    console.log(count);
    return true;
  } else if (str.length - 1 === str2.length) {
    while (c1 < str.length && c2 < str2.length) {
      if (str.charAt(c1) !== str2.charAt(c2)) {
        if (c1 !== c2) {
          count++;
          return false;
        }
        c2++;
      } else {
        c1++;
        c2++;
      }
    }
    return true;
  }
  console.log(count);
};
// oneAway("pale", "ple")
// oneAway("pales", "pale")
// oneAway("pale", "bale")

oneAway("pale", "bake");
