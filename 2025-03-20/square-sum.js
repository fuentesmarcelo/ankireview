// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
}
// hint: .reduce() can be solved with an arrow

// my solution

function squareSum(numbers){
    return numbers.reduce((a, b) => a**2 + b, 0)
}

// right solution

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }
  OR
  
  const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)
  