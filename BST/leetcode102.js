var levelOrder = function(root) {
    // if there is no root, return []
    if (!root) return []
    // create/initialize a variable called levels = []
    const levels = []
    //initialize a variable titled queue and place the root inside
    const queue = [root]
    
    //while the queue length is greater than 0
    while (queue.length > 0) {
        //initialize a variable titled size equal to the queue length
        let size = queue.length 
        //create an empty array
        const arr = []
        //while the size is greater than 0 
        while(size > 0) {
            //take off the last element in the queue 
            let cur = queue.pop()
            //push the element value into an array 
            arr.push(cur.val)
            //if there is a left, traverse the left side but push it into the front of the queue 
            if (cur.left) {
                queue.unshift(cur.left)
            }
            //if there is a right, traverse the right side and push it into the front of the queue 
            if (cur.right) {
                queue.unshift(cur.right)
            }
            //decrease the size 
             size--
        }
        //push the array into levels, another array
    levels.push(arr)    
    }
    //return levels
  return levels  
};