// PREP
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
    return str; // reverse those words
}

// P: the parameter is going to be a string with a space between each
// R: return the words in reverse
// E: n/a
// P: solve with an arrow function and use split, reverse, join with spaces

// my solution

const reverseWords = str => str.split('').reverse().join('');