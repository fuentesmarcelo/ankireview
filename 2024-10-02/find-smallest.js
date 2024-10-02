// PREP

// Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    //your code here
    return 0;
}
//hint: .sort


// P: the parameter is an array of integers
// R: we want to find the smallest integer
// E: [1, 2, 3] => [1]
// P: we will solve using a regular function
// we will first declare a variable and have sort attached to it
// we return that new variable


// my solution

function findSmallestInt(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    return sortedArr;
}


// right solution

function findSmallestInt(arr) {
    let sortedNums = arr.sort((a, b) => a - b)
    return sortedNums[0];
}