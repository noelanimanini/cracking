var getLonelyNodes = function(root) {
    //initialize an empty array 
    let arr = []
    //create a helper function 
    const dfs = (root) => {
        //if there is no root, return 
        if (!root) return;
        //if there is a root.left, but no root.right or vice versa
        if ((root.left && !root.right) || (!root.left && root.right)) {
            //push the value of the left or the right into the resultant array 
            arr.push(root.left?.val || root.right?.val)
        }
        //recursively call the left and the right 
        dfs(root.left)
        dfs(root.right)
    }

    //call the helper function 
    dfs(root)

    //return the array 
    return arr
  };