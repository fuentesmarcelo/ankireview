// PREP
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
    return str; // reverse those words
}

// P: we have a string as a parameter with each word separated by one space
// R: we want to return the string reversed
// E: 'example string' => 'string example'
// P: we will use split,reverse,join

// my solution

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}