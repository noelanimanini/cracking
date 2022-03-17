const uniqueHashes = (emails) => {
    // let result = []
    let hash = new Set()
    
    for (let i=0; i < emails.length; i++) {
        let cur = emails[i].split("@")
        let plus = cur[0].split("+")
        // console.log(plus)
        hash.add(plus[0].replaceAll(".", "") + "@" + cur[1])
    }
    // let filtered = result.filter((item, index) => result.indexOf(item) === index)
    // console.log(filtered)
    console.log(hash.size)
    return hash.size
}
// https://leetcode.com/problems/unique-email-addresses/
uniqueHashes(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])