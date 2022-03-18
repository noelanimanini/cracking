var solution = function(isBadVersion) {

    return function(n) {
       let min = 1 
       let max = n 
       while (min < max) {
           let guess = Math.floor((max + min) / 2)
           
           if (isBadVersion(guess)) {
               max = guess
               
           } else {
               min = guess + 1
           }
               
       }
        return min
    };
};

/*
binary search with a nested function 
*/ 