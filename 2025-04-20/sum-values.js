//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfValues(arr){
    //code here
}
// hint: reduce()

// my solution

function sumOfValues(arr){
    return arr.reduce((a, b) => a + b, 0)
}