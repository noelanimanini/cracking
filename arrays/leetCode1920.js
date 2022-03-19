var buildArray = function(nums) {
    let ans = []
    
    for (let i=0; i < nums.length; i++) {
        let cur = nums[i]
        ans.push(nums[nums[i]])
    }
    console.log(ans)
    return ans
    
};

buildArray([0,2,1,5,3,4])