// PREP

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
}
// hint: .split, .map, .length and make it an arrow


// P: the function takes a str
// R: return the arr with length of each word
// E" ['a'] => ['a' 1]
// P: we are first going to split the str to turn it into an arr
// we will then use map to make a clone 
// we will attach length to the str


function addLength(str){
    return str.split('').map(x => x + '' + x.length)
}