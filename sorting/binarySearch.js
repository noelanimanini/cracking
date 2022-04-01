var search = function(nums, target) {
    //create the min 
    let min = 0 
    //create the max 
    let max = nums.length-1
    //while the min is less than or equal to the max
    while (min <= max) {
        //find the middle 
        let guess = Math.floor((min+max)/2)
        //if the numbers are equal to the target
        if (nums[guess] === target) {
            //return the index
            return guess 
        } else if (nums[guess] < target) {
            min = guess + 1
        } else {
            max = guess - 1
        }
    }
    //else return -1
    return -1
};
