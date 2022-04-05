var inorderTraversal = function(root) {
    
    let curr = root 
    let result = []
    let pre; 
    let temp
    while (curr != null) {
        if (curr.left == null) {
            result.push(curr.val)
            curr = curr.right 
        } else {
            pre = curr.left 
            while (pre.right != null) {
                pre = pre.right 
            }
            pre.right = curr 
            temp = curr
            curr = curr.left
            temp.left = null 
        }
    }
    return result 
};