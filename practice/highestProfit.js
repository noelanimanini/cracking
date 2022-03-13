const highestProfit = (prices) => {
    if (prices.length === 1) return 0
    if (prices.length === 2 && prices[0] < prices[1]) console.log( prices[1] - prices[0] )
    if (prices.length === 2 && prices[0] > prices[1]) console.log( prices[0] - prices[1] )
    
    
    let highest = 0
    let lowest = 0
    let index = 0
    let index2 = 0
    for (let i=1; i < prices.length; i++) {
        let cur = prices[i]
        if (cur > highest) {
            highest = cur
            index = i
         
        }  
    }
   
    for (let i=1; i < prices.length; i++) {
        let cur2 = prices[i]
        if (cur2 < prices[i+1]) {
            lowest = cur2
            index2 = i
            break;
        } 
        else {
            index2 = i
            
        }
    }
   
    if (index < index2) {
        console.log(0)
        return 0
    } else if (index > index2){
        // console.log(lowest)
        console.log(highest - lowest)
        return highest - lowest
    }
}

highestProfit([1,2])