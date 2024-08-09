// PREP
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
}
    
hint: filter and typeof and can be arrow

// P: l is the parameter and it will be a non-negative integer
// R: return a new list with the strs filtered out
// E: ['hello', 8, 9] => [8, 9]
// P: we will use an arrow function that uses an arrow function with the parameter of l

// my solution

const filter_list = l = l.filter(c => typeof c === 'number');