// PREP

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
}
// hint: .split('').reverse().join('')


// P: the paramter is a string
// R: we want to return the reverses of each word in the string
// E: n/a
// P: n/a


// my solution

const reverseWords = str => str.split('').reverse().join('').split(' ').reverse().join(' ');