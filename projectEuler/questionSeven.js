const questionSeven = (n) => {
    let isPrime = true
    let num = 3
    let primes = [2]

    while (primes.length < n) {
        let max = Math.ceil(Math.sqrt(num))

        for (let i=0; primes[i] <= max; i++) {
            if (num % primes[i] === 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            primes.push(num)
        }
        isPrime = true

        num+=2
    }
    console.log(primes[primes.length-1])
    return primes[primes.length-1]
}

questionSeven(10001)