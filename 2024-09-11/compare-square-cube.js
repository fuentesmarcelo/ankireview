// PREP

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSquareAndCube(a, b){
    //code here
}
// hint: .reduce() twice

// P: the parameter is an a and b
// R: we want to return the sum of squares and cubes of each element
// E: n/a
// P: we are going to use .reduce twice


// my solution

function compareSquareAndCube(a, b){
    return (a,b).reduce((a, b) a + b**2).reduce((a, b) => a + b**3)
}


// right solution

function compareSquareAndCube(a, b){
    return a.reduce((acc, c) => acc + c **2, 0) > b.reduce((acc, c) => acc + c **3, 0)
    }