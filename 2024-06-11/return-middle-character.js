// PREP
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    //Code goes here!
}
//hint: arrow function, .slice,  .length, Math.floor

// P: we are given a word of s 
// R: we want to return the middle character if odd and the two middle characters if even
// E: test => es and bat => a
// P: we are going to solve this using an arrow function 
// we will need to use .slice to detemine the two middle characters 
// we will need to use .length and Math.floor to detemine the odd character


// my solution



const getMiddle = s => s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s[Math.floor(s.length / 2)]