const quickSort = (array) => {
    if (array.length <= 1) return array 
    let left = []
    let right = []

    let pivot = array[0]

    for (let i=1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }
    
    console.log(quickSort(left).concat(pivot, quickSort(right)))
    return quickSort(left).concat(pivot, quickSort(right))
}
quickSort([14,2,3,6])