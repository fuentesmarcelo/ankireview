// PREP
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    //Code goes here!
}
//hint: can solve as arrow function, .length, .slice, Math.floor

// P: the parameter is a string that is a word
// R: return the middle character if odd and return the two middle characters if even
// E: n/a
// P: solve this as an arrow function
// attach the string to .length



// my solution

function getMiddle(s){
    return s.length 
}


const getMiddle = s = s.lengt


// right solution

const getMiddle = s => s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s[Math.floor(s.length / 2)]
