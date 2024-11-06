// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    // Your code here
}
// hint: can be solved using arrow with split, map, join or solved regular with for loop


// my solution

const doubleChar = str => str.split('').map(num => num**2).join('');


// right solution

const doubleChar = (str) => str.split("").map(c => c + c).join("");
