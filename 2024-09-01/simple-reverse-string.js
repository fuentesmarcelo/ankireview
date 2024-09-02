// PREP
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string){
    //your code here
}
//hint can be solved via arrow function

// P: the paramter is a string
// R: we want to return the reversese of words in the given string, always separated by a single space.


// my solution

const reverse = string => string.split('').reverse().join('');