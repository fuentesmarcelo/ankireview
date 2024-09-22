// PREP

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    //Code goes here!
}
//hint: can solve as arrow function, .length, .slice, Math.floor

// P: the parameter is the string
// R: return the middle character and depending on even or odd
// E: n/a
// P: try to return a regular function
// we will return s with length attached


// my solution

const getMiddle = s => s % 2 === 0 ? s.slice(1, )


// right solution

const getMiddle = s => s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s[Math.floor(s.length / 2)]