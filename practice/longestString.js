const longestString = (str) => {
    let result = str.replace(/[$&+,:;=?@#|'<>.^*()%!-]/g, "")
    let curr = result.split(" ")
    let first = ""
    let i=0
    
    for (let i=0; i < curr.length; i++) {
        let cur = curr[i]
        if (cur.length < curr[i+1].length) {
            first += curr[i+1]
            console.log("first" + first)
        } else if (cur.length > curr[i+1].length) {
            if (first === "") {
                first += cur
                console.log("second" + first)
            } else {
                console.log("third" + first)
                break;

            }
        }
        if (cur.length === curr[i].length) {
            if (first === "") {
                first += cur
                console.log("fourth" + first)
            } else {
                console.log("fifth" + first)
                break;
            }
            
        }
    }
    console.log("last" + first)
    return first
}

longestString("fun&!! time")
// longestString("I love dogs")