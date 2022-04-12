function quickSort(values) {
 if (values.length <= 1) return values 

 let left = []
 let right = []
 let pivot = values.pop()

 for (let i=0; i < values.length; i++) {
   values[i] <= pivot ? left.push(values[i]) : right.push(values[i])
 }


 return [...quickSort(left), pivot, ...quickSort(right)]
}

//Big O is o (n log n). This means that the algorithm is very efficient.

quickSort([3, 5, 4, 2, 2, 9, 8, 77]);
