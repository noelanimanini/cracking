var restoreString = function(s, indices) {
    let string = s.split("")
    let ans = []
    for (let i=0; i < s.length; i++){
        ans[indices[i]] = s[i]
    }
    console.log(ans.join(""))
    return ans.join("")
};
