var twoSum = function(numbers, target) {
    if (numbers.length === 2) return [1, 2]
    let ans = []
    let p1 = 0 
    let p2 = numbers.length - 1 
    let count = 0 
    
    while (count < numbers.length) {
        if (numbers[p1] + numbers[p2] === target) {
            return [p1+1, p2+1]
        } else if (numbers[p1] + numbers[p2] > target) {
            p2--       
        } else if (numbers[p1] + numbers[p2] < target) {
            p1++
        }
        
        count++
    }

};

twoSum([2,3,4], 6)