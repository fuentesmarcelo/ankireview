// create a function that takes in a word and the function should tell us if that word is a palindrome
function isPalidrome(word){
    // code here
}


// function word say is a palindrome
// word -> will it always be a str? yes, will there ever be special character? no !, no nums, case sen? no
// return a boolean true || false
// racecar -> true
// bob -> true
// tacos -> false



// my solution

function isPalidrome(word){
// word -> reverse that word - split, reverse, join
    let reversedWord = word.split('').reverse().join('');
// revWord === word
    if(word === reversedWord){
        return true;
    }else{
        return false;
    }
}

const isPalidrome = word => word === word.split('').reverse().join('');