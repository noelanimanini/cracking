var inorderTraversal = function(root) {
    //initialize the root, the result, and two variables called pre and temp 
    let curr = root 
    let result = []
    let pre; 
    let temp
    //while the current is not equal to null 
    while (curr != null) {
        //if the left is null, 
        if (curr.left == null) {
            //push the current value into the result array 
            result.push(curr.val)
            //and assign the current value to be the right 
            curr = curr.right 
            //else if the current.left is null 
        } else {
            //assign the current.left to be the pre value 
            pre = curr.left 
            //while the pre.right is not null 
            while (pre.right != null) {
                //continue to loop right by reassignment 
                pre = pre.right 
            }
            // take pre.right and assign it to curr.
            pre.right = curr 
            //make temp curr
            temp = curr
            //curr is now curr.left 
            curr = curr.left
            //temp.left is now null 
            temp.left = null 
            //^this continues the loop in the initial for statement 
        }
    }
    //return the result 
    return result 
};