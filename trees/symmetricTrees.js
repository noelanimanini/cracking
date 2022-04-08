var isSymmetric = function(root) {
    if(!root)  return true; // if there is no root, return true as per the edge case
    
    //recursively call DFS on the left and right sides of the root 
    function dfs(leftNode, rightNode) {

        if (!leftNode && !rightNode) { // if there is no left and no right, return true 
            return true;
        }
        if(leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) {
            //if there is a left node, but not a right OR there is no left node, but there is a right, 
            //OR the root.left is not equal to the root.right val, 
            //return false  
            return false;
        }
        // recursively call on the root.left.right, the root.right.left AND recursively call on the root.left.left and the root.right.right
        return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
    }

    //return the recursive call on the left and the right 
    return dfs(root.left, root.right);
};