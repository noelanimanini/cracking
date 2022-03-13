// https://leetcode.com/problems/two-sum/
const twoSum = (nums, target) => {
    let hash = new Map()

    for (let i=0; i <= nums.length; i++) {
        let diff = target - nums[i]
        if (hash.has(diff) && hash.get(diff) !== i) {
            console.log([hash.get(diff), i])
        }
        hash.set(nums[i], i)
    }
  
}

// twoSum([2,7,11,15], 9)
// twoSum([3,2,4], 6)
twoSum([3,3], 6)
// [0,1]
// : [1,2]
// [0,1]
