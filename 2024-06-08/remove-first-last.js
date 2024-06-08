// PREP
//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
    //You got this!
};
hint: slice() also with arrow function

// P: the parameter will be a string and we are only given one parameter
// R: we want to return the string with the first and last character removed
// E: 'test' => 'es'
// P: we can use slice object to remove the first and last character, solve this without using the arrow function

// my solution

function removeChar(str){
    return str.slice(1,-1);
}