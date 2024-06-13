// PREP
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
}
// hint: filter and typeof and can be arrow

// P: the parameter is going to be a list of strings of non-negative integers
// R: we are trying to return a new list with the strings filtered out


// my solution

const filter_list = l => l.filter(c => typeof c !== 'string');