// PREP

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
}
//hint: String, split, map, reverse

// P: the parameter is a non-negative number
// R: we want to return the digits of this numbers within an array in reverse order
// E: n/a
// P: we will attached String to numbers
// we will split()
// we will use map and within have the number.reverse

function digitize(n) {
    return String.n.split('').map(String(n).reverse())
}



// right solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}