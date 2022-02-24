const findIntersection = (strArr) => {
  let first = strArr[0]
  let second = strArr[1]
  let output = []
  first = first.split(", ")
  second = second.split(", ")
  for (let i=0; i < first.length; i++) {
      for (let j=0; j < second.length; j++) {
          let cur = first[i]
          let sec = second[j]
          if (cur == sec) {
            output.push(cur)
          }
      }
  }
   console.log(output.join(","))

}

// findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])
findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])