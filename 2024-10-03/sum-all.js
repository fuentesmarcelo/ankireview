// PREP

//Create and array of numbers. Sum all of the numbers. Alert the sum.

// hint: .reduce((acc, c) => acc + c, 0)


// P: the parameter is an array of numbers
// R: we want to return the sum of all the numbers
// E: n/a
// P: create a regular function 
// attached reduce to the arr




// my solution


fucntion sumOfAll(arr){
    let arrSum = arr.reduce((a, b) => a + b, 0)
    alert(arrSum)
}