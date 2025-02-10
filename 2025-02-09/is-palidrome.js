// create a function that takes in a word and the function should tell us if that word is a palindrome
function isPalidrome(word){
    // code here
}
//hint: can be solved as arrow function

// my solution

function isPalidrome(word){
    if(word === word.reverse()){
        return 'yes'
    }else{
        return 'no'
    }
}


// right solutions

function isPalidrome(word){
    let reversedWord = word.split('').reverse().join('');
    if(word === reversedWord){
    return true;
    }else{
    return false;
    }
}
    
    const isPalidrome = word => word === word.split('').reverse().join('');