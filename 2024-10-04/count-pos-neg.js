// // Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    // your code here
}
//hint: if statement, declare variables, for loop, if statement


// we are given an array of integers
// we want to return an array where the first element is only pos nums, and next is only neg nums
// make an if statement that addresses 0 which can neither be pos or neg
// declare a variables for positive and negative numbers and equal them to 0 as a starting off point
// create a for loop 
// next line is an if statement



// my solution

function countPositivesSumNegatives(input) {
    if()

    let posNum = 0
    let negNum = 0

    for(let i = 0; i < input){
        if()
    }
}


// right solution

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}