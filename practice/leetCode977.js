var sortedSquares = function(nums) {
    // const ans = nums.map(x => Math.pow(x,2)).sort((a,b) => a - b)
    // console.log(ans)
    // return ans 
    const squared = []
    let small = 0
    let large = nums.length - 1

    for (let i=nums.length-1; i >= 0; i--) {
        const smaller = nums[small]
        const larger = nums[large]

        if (Math.abs(smaller) > Math.abs(larger)) {
            squared[i] = smaller * smaller
            small++
        } else {
            squared[i] = larger * larger
            large--
        }
    }
    console.log(squared)
    return squared
};

// sortedSquares([-4,-1,0,3,10])
sortedSquares([-7,-3,2,3,11])
// [0,1,9,16,100]
// https://leetcode.com/problems/squares-of-a-sorted-array/