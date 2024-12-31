// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    //Code goes here!
}
//hint: can solve as arrow function, .length, .slice, Math.floor


// my solution

const getMiddle = s => s.length 


// right solution

const getMiddle = s => s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s[Math.floor(s.length / 2)]