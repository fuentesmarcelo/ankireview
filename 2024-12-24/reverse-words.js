//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
}
// hint: .split('').reverse().join('')


// my solution

function reverseWords(str) {
    return str.split('').reverse().join('');
}


// right solution

function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }