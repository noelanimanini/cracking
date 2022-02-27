const fourSum = (arr, target) => {
    let array = []
    let count = 0
    arr = arr.sort()
    let filtered = arr.filter((nums, index) => {
        return arr.indexOf(nums) == index
    })

   while (count <= target) {
        let i=0 
        let first = filtered[i]
        count += first
        if (count === target) {
            array.push(first)
        }
        i++
        count++
   }
   console.log(count)
} 

fourSum([1,0,-1,0,-2,2], 0)

/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
*/ 

/*
Q: given a target, return a sorted array of four integers that add up to the target

sort the array, create a counter that adds up the target, and push everything into a new array and return it
*/ 