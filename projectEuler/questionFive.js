function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        // Count divisors
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        console.log(multiple)
        return multiple;
      }
    }
  }
  
  smallestCommons([1, 20])


// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

/*
q: what is the smallest postive* number without any remainders divisible from 1 to 20?

2520 - is positive, numbers 1 - 10 can evenly divide from it without a remainder

Method: given a number, determine if it can be divisible from 1 - 20. To solve this, given any number, it has to be positive, else return false(?)
-then, if it is positive, create a for loop that increments from 1 to 20 and use the modulus to determine if there is a remainder at the increment. If there is a remainder, break and increment the given number. 

*/ 