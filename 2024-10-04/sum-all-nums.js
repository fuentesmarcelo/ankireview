-//Create an array of numbers. Sum all of the numbers. Alert the sum.
// hint: .reduce


// the parameter is going to be an array of numbers
// we want to alert the sum of all the numbers
// [1, 10] => [11]
// we are going to solve with a regular function 
// we will use .reduce to sum the parameter


// my solution

function sumOfArr(arr){
    let arrSum = arr.reduce((a, b) => a + b, 0);
    alert(arrSum);
}
