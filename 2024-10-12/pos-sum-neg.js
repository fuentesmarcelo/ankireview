// // Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    // your code here
}
//hint: if statement, declare variables, for loop, if statement




// my solution

function countPositivesSumNegatives(input) {
    if(input == 0 || input == null){
        return = [];
    }
    let postiive = 0;
    let negative = 0;
    for(let i = 0; l=input.length; i++){
        if(i > input.length){
            return positive++
        }else{
            return negative++
        }
    }
    return[postiive, negative]



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