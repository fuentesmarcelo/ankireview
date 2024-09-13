// PREP

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
    //your code here
}
//hint can be solved via arrow function

// P: the parameter is a string of words
// R: we want to return the string in reverse
// E: n/a
// P: solve using an arrow function
// we will attach .reverse() to the string


// my solution

const reverse = string => string.reverse();

// right solution

reverse = s => s.split(' ').reverse().join(' ')
