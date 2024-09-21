// PREP

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
    //code here
}
//hint: reduce and can be solved as an arrow

// P: the parameter is an array of integers as strings and numbers
// R: we want to return the sum of the array if all are numbers
// E: n/a
// P: we will solve as an arrow function
// the function is sumMix
// the parameter is an x
// we will using reduce on x


// my solution

const sumMix = x => x.reduce((a, b) => a + b, 0)


// right solution

const sumMix=x=>x.reduce((a,b)=>+b+a,0)