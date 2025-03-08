//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

// hint: .replaceAll()

// my solution

let str = 'I am a jr. dev';
str.replaceAll(/jr. dev/g, 'software engineer')

// right solution

let str = 'I am looking for jr. dev postions.'
console.log(str.replaceAll('jr. dev', 'software engineer'))