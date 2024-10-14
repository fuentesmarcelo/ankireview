// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
}
// hint: .split, .map, .length and make it an arrow


// our parameter is a string
// we wan to return an array/list with the length of each word added
// attach split to turn the string into an array
// attach now .map to create a new array (include inside .map words with length attached)



// my solution
function addLength(str) {
    return str.split('').map(word => word.length);
}


// right solution

function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
}