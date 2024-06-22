// PREP
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return ""
}
hint: .join() can be solved via arrow

// P: you are given a parameter of words 
// R: return the parameter if the strs smashed together with no spaces
// E: 'hello world dude' => 'helloworlddude'
// P: you will use .join() and arrow within the provided function

// my solution

function smash(words){
    return words.join('');
}

const smash = words => words.join(' ');