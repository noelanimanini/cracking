const mergeSort = (arr) => {
  let first; 
  let second; 
  let help; 
  if (arr.length <= 1) {
    return arr 
  }
  let middle = Math.floor(arr.length / 2 )

  first = mergeSort(arr.slice(0, middle))
  second = mergeSort(arr.slice(middle))

  help = helperFunc(first, second)
  return help
}

function helperFunc (left, right) {
  // console.log(left)
  console.log(right)
  let point = 0 
  let point2 = 0; 
  let arr = []

   while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }