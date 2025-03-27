//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(arr){
    //code here
}
// hint: .map and can be an arrow function

// my solution

function invert(arr){
    return arr.map(num => num % 2 === 0)
}

// right solution

function invert(arr) {
    return arr.map( x => x === 0 ? x : -x);
 }
 