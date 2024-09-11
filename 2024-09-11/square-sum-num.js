// PREP

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
}

hint: .reduce() can be solved with an arrow

// P: the parameter are numbers 
// R: return the square sum of the numbers passed into it
// E: n/a
// P: let's solve this with an arrow function
// we will attach the numbers with .reduce()

// my solution

const squareSum = numbers => numbers.reduce((a, b) => a + b**2, 0)