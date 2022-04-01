var smallerNumbersThanCurrent = function(nums) {
    let result = []
    
    nums.forEach((num, idx) => {
        let count = 0
        for (let i=0; i < nums.length; i++) {
            if (num === nums[i]) continue; 
            if (num > nums[i]) count++
        }
        result[idx] = count
    })
    
    return result
};