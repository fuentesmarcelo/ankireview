// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
    let z = [];
    return z;
}
//hint: for loop && push


// my solution

function countBy(x, n) {
    let z = [];
    for(let i = 0; i < n.length; i++){
    }
    return z.push();
}


// right solution

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
    z.push(x * i);
    }
    return z;
    }