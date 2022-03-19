var rotate = function(nums, k) {
    // const result = nums.slice(k+1)
    // const first = nums.slice(0,k+1)
    for (let i=0; i < k; i++) {
        let temp = nums[nums.length - 1]
        nums.pop()
        nums.unshift(temp)
    }
   console.log(nums)
};


rotate([1,2,3,4,5,6,7], 3)