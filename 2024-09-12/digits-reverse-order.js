// PREP

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
}
//hint: String, split, map, reverse


// P: the parameter is a non-negative number
// R: we want to return the digits of this number with an array in reverse order
// E: n/a
// P: solve with regular function
// we will return String of n with split, map, and reverse


// my solution

function digitize(n) {
    return String(n).split('').map(n => n.reverse());
}


// right solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
    }