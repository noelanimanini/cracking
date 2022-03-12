const questionTen = (num) => {
    let ans = 0
    for (let i=1; i < num; i++ ){
       if (helper(i)) {
           ans += i
       }
    }
    console.log(ans)
}

const helper = (num) => {
    if (num === 1) {
        return false
    } else if (num < 4) {
        return true 
    } else if (num % 2 === 0) {
        return false
    }else if (num < 9) {
        return true
    
   } else if (num % 3 === 0) {
       return false 
   } else {
       let r = Math.floor(Math.sqrt(num))
       let f = 5
       while (f <= r) {
        if (num % f === 0) return false 
        if (num % (f+2) === 0) return false
        f = f+6
       }
       return true
   }
}

questionTen(2000000)
