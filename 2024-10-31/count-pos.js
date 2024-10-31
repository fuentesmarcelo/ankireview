// // Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    // your code here
}
//hint: if statement, declare variables, for loop, if statement




// my solution

function countPositivesSumNegatives(input) {
    // if statement for 0
    if(input.length === 0 || input === null){
        return [];
    }

    // declare variables for pos/neg
    let positive = 0;
    let negative = 0;

    // for loop with an if statement
    for(let i = 0; l = input; i < l; i++){
        if(input[i] < l){
            return positive++;
        }else{
            return negative++
        }
    }
    return [positive, negative];
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