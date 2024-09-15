// PREP

// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
    return str; // reverse those words
}

// P: the parameter is a string 
// R: we want to reverse the string
// E: n/a
// P: we will try to use split, reverse, join


// my solution

const reverseWords = str => str.split('').reverse().join('');