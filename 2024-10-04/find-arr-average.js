// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    // your code here
    return 0;
}
// hint: if statement, declare variable, for loop or arrow with reduce


// the parameter is an array of numbers
// we want to return the average of the numbers
// solve via arrow function
// using only reduce to solve


// my solution

const findAverage = array => array.reduce((a, b) => a + b, 0) / array.length || 0;


