// PREP
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
}
hint: .split('').reverse().join('')

// P: the parameter is going to be a string 
// R: we want to return the string reversed


// my solution

function reverseWords(str){
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}