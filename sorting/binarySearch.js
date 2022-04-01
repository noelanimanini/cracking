var search = function(nums, target) {
    let min = 0 
    let max = nums.length-1
    
    while (min <= max) {
        let guess = Math.floor((min+max)/2)
        
        if (nums[guess] === target) {
            return guess 
        } else if (nums[guess] < target) {
            min = guess + 1
        } else {
            max = guess - 1
        }
    }
    return -1
};
