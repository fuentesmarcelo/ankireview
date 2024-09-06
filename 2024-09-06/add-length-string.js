// PREP
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
}
// hint: .split, .map, .length and make it an arrow

// P: the parameter is a string 
// R: return the string as an array list with length of each word added to each element
// E: n/a
// P: we will return the str with .split attached to it


// my solution
function addLength(str) {
    return str.split(str.map())
}


// right solution

var addLength = str => str.split(' ').map(x => x + ' ' + x.length);

function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
}
