// PREP
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
    //code here
}
// hint: .reduce()

// P: the parameter is an array of integers 
// R: we want to return the result of multiplying the values together in order
// E: n/a
// P: we will use .reduce() to solve this problem

// my solution

function grow(x){
    return x.reduce((a,b) => a * b)
}