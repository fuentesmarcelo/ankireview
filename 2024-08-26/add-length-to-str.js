// PREP
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
}
// hint: .split, .map, .length and make it an arrow

// P: the str is the parameter
// R: we want to return the str as an arr with length of each word added to each element



// my solution

function addLength(str){
    return str.split('').map(word => word + '' + word.length);
}
