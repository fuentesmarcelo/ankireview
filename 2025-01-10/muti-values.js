//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
    //code here
}
// hint: .reduce()


// my solution

function grow(x){
    return x.reduce((acc, c) => acc * c, 1)
}