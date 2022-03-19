var rotate = function(nums, k) {
    // const result = nums.slice(k+1)
    // const first = nums.slice(0,k+1)
    let actualRotation = nums.length - (k % nums.length) 
    if (actualRotation === 0) return nums 
    const front = nums.splice(actualRotation)
    console.log(nums.splice(0, 0, ...front))
    nums.splice(0, 0, ...front)
};


rotate([1,2,3,4,5,6,7], 3)