const quickSort = (array) => {
    if (array.length < 2) {
        return array 
    } else {
    let left = []
    let right = []

    let pivot = array[Math.floor(Math.random()* (array.length-1))]

    for (let i=1; i < array.length; i++) {
        if (array[i] <= pivot) {
            left.push(array[i])
        }
        if (array[i] > pivot) {
            right.push(array[i])
        }
    }
    
    console.log(quickSort(left).concat(pivot, quickSort(right)))
    return quickSort(left).concat(pivot, quickSort(right))
    }
}
quickSort([14,2,3,6])