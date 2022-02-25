const paritySort = (arr) => {
    let result = []
    let left = []
     arr.forEach(x => {
        if (x % 2 == 0 ) { 
            result.push(x)
            
        } else {
            left.push(x)
        }
        
    })

   console.log(result.concat(left))
}

paritySort([3,1,2,4])

/*given an array, push all the even integers to the beginning of the array. The order does not matter

M: sort through the array by looping through and creating conditionals that state: 
"if even, push to the new array"*/ 