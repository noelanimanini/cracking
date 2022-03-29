var checkInclusion = function(s1, s2) {
    let hash = new Map()
    let truth = false
    let count = 0
    for (let ele of s1) { hash.set(ele, hash.get(ele)+1 || 1) } 
    
     let l = 0, r = 0, n = hash.size; 
    
     while(r<s2.length) { // increase r until the map is empty (n==0)
        let a = s2[r]; 
        if(hash.has(a)) hash.set(a, hash.get(a)-1);  // if we found a char from s1 in s2, decrease freq
        if(hash.get(a)==0) n--; // if we found all freq of that char, n-- 
        
        while(n==0) { // if we foud all freq of all characters of s1 in s2, 
            let b = s2[l];
            if (r-l+1 == s1.length) return true; // if curr window matches s1 length then we found the answer
            else if(hash.has(b)) hash.set(b, hash.get(b)+1); // when moving window, add prev chars back
            if(hash.get(b)>0) n++; // we did not find all the chars in required window
            l++; // keep  moving the window.
        }
        r++;
    }
    return false;
   
};