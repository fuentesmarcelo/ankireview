// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    // your code here
    return 0;
}
// hint: if statement, declare variable, for loop or arrow with reduce


// my solution

const findAverage = array => array.reduce((a, b) => a + b, 0)



// right solution
const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
