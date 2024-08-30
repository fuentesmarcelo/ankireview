// PREP

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(arr){
    //code here
}
hint: .map and can be an arrow function

// P: the parameter is an arr
// R: we want to return the arr with positives becoming negatives and vice verse


// my solution


const invert = arr => arr.map(num => num % 2 === 0 ? positive : negative);



// right solution

const invert = arr => arr.map(x => x === 0 ? x : -x);