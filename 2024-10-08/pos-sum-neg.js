// // Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    // your code here
}
//hint: if statement, declare variables, for loop, if statement


// the parameter is going to a number 
// the number can be positive or negative
// 0 will neither be pos/neg
// we want to return the first element as the count of all of the positive numbers
// the second element is the count of all of the negative numbers
// if input is an empty array or null it should return an empty array
// we are going to make an if statement to address the sum being zero or empty
// we are going to decalre two variables for positive and negative sums of 0
// we are going to make a for loop with the second portion being l = the input length
// we will finish it with an if statement that will loop through the inputs



// my solution

function countPositivesSumNegatives(input) {
    if(input = 0 || input = null)
        return []
    let positive = 0
    let negative = 0
    for(let i = 0; l=input.length; i++){
        if(i < input){
            return positive++
        }else{
            return negative++
        }
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