// PREP
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    // Your code here
}
// hint: can be solved using arrow with split, map, join or solved regular with for loop

// P: the parameter is string and it will be case-senitive
// R: we want to return each character repeated once
// E: 'hello' => 'hheelllloo'
// P: solve this with an arrow function using split of str and then map, and join it

// my solution

const doubleChar = str => str.split('').map(c => c + c).join('');