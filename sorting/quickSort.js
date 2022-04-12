function quickSort(values) {
 if (values.length <= 1) return values 

 let left = []
 let right = []
 let pivot = values[0]

 for (let i=1; i < values.length; i++) {
   values[i] <= pivot ? left.push(values[i]) : right.push(values[i])
 }

 console.log(quickSort(left).concat(pivot, quickSort(right)))
 return quickSort(left).concat(pivot, quickSort(right))
}

//Big O is o (n log n). This means that the algorithm is very efficient.

quickSort([3, 5, 4, 2, 2, 9, 8, 77]);
