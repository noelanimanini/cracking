const practice = (arr) => {
    if (arr.length === 0) return 
    let cur = arr.pop()
    console.log(cur)
    practice(arr)
}

practice([1,2,3,4,5])