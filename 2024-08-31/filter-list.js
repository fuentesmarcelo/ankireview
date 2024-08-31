// PREP
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
}
//hint: filter and typeof and can be arrow

// P: the parameter is going to be a list of non-negative integers and strings
// R: we want to return a new list with the strings filtered out
// E: n/a
// P: we will solve as an arrow function
// we will first use filter of the list
// within filter we we get a specific str and return it without it

// my solution

const filter_list = l => l.filter(c => typeof c !== 'string');