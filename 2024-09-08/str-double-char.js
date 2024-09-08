// PREP

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    // Your code here
}
// hint: can be solved using arrow with split, map, join or solved regular with for loop


// P: the parameter is a string that is case-sensitive
// R: return the string with each character repeated
// E: n/a
// P: solve this with an arrow
// attach split with string
// next add map
// finally add join


// my solution

const doubleChar = str => str.split('').map(str).join('');


// right solution

const doubleChar = (str) => str.split("").map(c => c + c).join("");
