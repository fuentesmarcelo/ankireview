// PREP
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return '';
}
hint:arrow with replace() and //g or replaceAll() 

// P: the parameter will be a string
// R: we want to return the string with all the exclamation marks removed
// E: 'Hello!' => 'Hello'
// P: don't solve with arrow but write it out using replaceAll()

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}