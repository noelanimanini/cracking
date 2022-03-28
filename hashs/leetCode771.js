var numJewelsInStones = function(jewels, stones) {
    let hash = new Map()
    let count = 0 
    for (let ele of jewels) {
        hash.set(ele, ele)
    }
    
    for (let i=0; i < stones.length; i++) {
        if (hash.get(stones[i])) {
            count++
        } 
    }
    return count
};