var rangeSumBST = function(root, low, high) {
    let stack = [root] 
    let queue = []
    let count = 0
    
    while (stack.length > 0) {
        let current = stack.pop()
        
        
        if (low <= current.val && current.val <= high) {
            queue.push(current.val)
            console.log(current)
            count += current.val
        }
        
        if (current.right) {
            stack.push(current.right)
        }
        
        if ( current.left ) {
            stack.push(current.left)
        }
        
    }
    
    
    return count 
};