// PREP

// Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    //your code here
    return 0;
}
//hint: .sort

// P: the parameter is an array of integers
// R: we want to find the smallest integer of the array
// E: n/a
// P: we will do this by using .sort on the arr and calling the index of 0


// my solution

function findSmallestInt(arr){
    let smallestArray = arr.sort((a, b) => a - b)
    return smallestArray[0]
}