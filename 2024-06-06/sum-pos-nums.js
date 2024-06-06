// PREP
//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

HINT: for loop
function positiveSum(arr) {
    //code here
}


// P: the parameter will be an arr 
// R: we want to return the sum of all the positive nums
// E: [1,2,4] => [6] 
// P: we are going to declare a sum variable and equal it to 0
// we are going to use a for loop to find all the positive numbers
// we are going to sum the positive numbers using the arr index and sum variable


// my solution

function positiveSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}