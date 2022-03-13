const highestProfit = (nums) => {
    let hash = new Map

    for (let i=1; i <= nums.length; i++) {
        let highest = 0
        let lowest = 0
        if (nums[i] > highest) {
            highest = nums[i]
            hash.set(highest, i)
        }
        if (nums[i] < highest) {
            lowest = nums[i]
            hash.set(lowest, i)
        }
    }
    console.log(hash)
}

highestProfit( [7,1,5,3,6,4])