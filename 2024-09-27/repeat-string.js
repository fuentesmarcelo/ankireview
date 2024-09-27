// PREP

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    //code here
}
//hint: .repeat() can be solved as an arrow function


// P: the parameter is a number and a string
// R: we want to return a string repeated exactly n times
// E: n/a
// P: solve as an arrow function


// my solution

const repeatStr = (n, s) => s.repeat(n => s*n);


// right solution

const repeatStr = (n,s) => s.repeat(n);