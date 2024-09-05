// PREP
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
}
//hint: String, split, map, reverse

// P: the parameter is a non-negative number
// R: return the digits within an array in reverse order
// E: [1,2] => [2,1]
// P: we will state with a return 
// we will add String with .split
// within .split we are going to use .map
// within .map we will use .reverse with the parametere n


// my solution

function digitize(n) {
    return String(n).split(n => n.map(n.reverse()))
}


// right solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}