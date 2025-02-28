// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    // your code here
    return 0;
}
// hint: if statement, declare variable, for loop or arrow with reduce

// my solution

function findAverage(array) {
    // your code here
    return 0;
}

const findAverage = array => array.reduce((c, acc) => c + acc)/array || 0;

// right solution

function findAverage(array) {
    if (array.length === 0) return 0; // Handle empty array case
    let sum = 0
    for(let i = 0; i < array.length; i++){
      sum += array[i]
    }
    return sum/array.length;
}

const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
