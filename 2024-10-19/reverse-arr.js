// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //code here
}
//hint: String, split, map, reverse


// my solution

function digitize(n){
    return String(n).split('').map(num => num.reverse())
}


// right solution

function digitize(n) {
    return String(n).split('').map(Number).reverse()
    }