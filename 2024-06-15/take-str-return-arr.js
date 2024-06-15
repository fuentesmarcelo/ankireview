// PREP
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
}
// hint: .split, .map, .length and make it an arrow

// P: the parameter is a string with at least one element and words separated by a space
// R: return the string as an array with the length include in each element
// E: 'hello' => ['hello' 5]
// P: first we will need to use .split to make the str into an arr
// now we have an arr use the .map with .length init and make it an arrow

// my solution

const addLength = str = str.split('').map(x => x + '' + x.length)