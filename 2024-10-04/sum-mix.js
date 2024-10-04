//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
    //code here
}
//hint: reduce and can be solved as an arrow (two plus)


// the parameter is going to an array of integers as strings and numbers
// we want to return the sum of the array values but only the numbers




// my solution

const sumMix = x => x.reduce((a, b) => +b + a, 0);