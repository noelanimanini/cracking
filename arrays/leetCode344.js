var reverseString = function(s) {
    // s.reverse()
    let i=0 
    let j = s.length-1
    
    while (i < j) {
       let temp = s[j]
       s[j] = s[i]
       s[i] =  temp
        
       i++
       j--
    }
    console.log(s)
};