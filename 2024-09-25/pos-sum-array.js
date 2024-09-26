// PREP

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    //code here
}
// HINT: for loop and if


// P: the parameter is an array of numbers
// R: we want to return the sum of all of the positive ones


// my solution

function positiveSum(arr) {
    for(){
        if(let i = 0; i < arr.length; i++){

        }
    }
}



// right solution

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
        }
    }
    return sum;
  }