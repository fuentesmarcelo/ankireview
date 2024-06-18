// PREP
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
}
hint: .split('').reverse().join('')

// P: we are given a parameter of string 
// R: we want to return string but in reverse
// E: 'hello' => 'olleh'
// P: we will do this simply by using the .split .reverse .join


// my solution

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
