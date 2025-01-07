// create a function that takes in a word and the function should tell us if that word is a palindrome
function isPalidrome(word){
    // code here
}
//hint: can be solved as arrow function


// my solution

const isPalidrome = word => word == word.reverse() ? 'Yes' : 'No';


// right solution

const isPalidrome = word => word === word.split('').reverse().join('');