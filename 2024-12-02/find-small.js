// Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    //your code here
    return 0;
}
//hint: .sort

// my solution

function findSmallestInt(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    return sortArr[0];
}