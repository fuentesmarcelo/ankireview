// PREP
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
}

hint: .reduce() can be solved with an arrow

// P: numbers are the parameters
// R: return the sum of numbers sqaured 


// my solution

const squareSum = numbers = numbers.reduce((acc, c) => acc + c**2, 0);