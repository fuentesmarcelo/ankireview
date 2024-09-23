// PREP

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
}
// hint: .split, .map, .length and make it an arrow


// P: the parameter is a string
// R: we want to return an array/list with length of each word added to each element
// E: n/a
// P: solve as an arrow function


// my solution

const addLength = str => str.split('').map(str => str.length);


// right solution

var addLength = str => str.split(' ').map(x => x + ' ' + x.length);
