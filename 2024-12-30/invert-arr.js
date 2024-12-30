//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(arr){
    //code here
}
// hint: .map and can be an arrow function


// my solution

const invert = arr => arr.map()


// right solution

const invert = arr => arr.map(x => x === 0 ? x : -x);