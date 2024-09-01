// PREP
//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    //code here
}
// HINT: for loop and if


// P: the parameter is an arr 
// R: return the sum of all of the positive ones in the arr
// E: [1,-4,7,12] => 1 + 7 + 12 = 20
// P: we will begin to solve this using the first line of code as a for loop
// second line of code will be an if statment
// last line will be what gets returned

// my solution

function positiveSum(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr % 2 === 0){
            return sum += arr[i]
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