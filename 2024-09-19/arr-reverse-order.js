// PREP

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
}
//hint: String, split, map, reverse

// P: the parameter is a non-negative number
// R: we will return the digits with the array in reverse order
// E: n/a
// P: we will first have the parameter in a string
// next we attach split to it
// next we need to attach map to it to return the new array with an arrow function inside
// finally add reverse at the end


// my solution

function digitize(n) {
    return String(n).split('').map(n => n.reverse());
}

// right solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}