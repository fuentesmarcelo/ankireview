//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return '';
}
// hint:arrow with replace() and //g or replaceAll() 



// my solution 

const removeExclamationMarks = s => s.replace(/!/gi, '')


// right solution
const removeExclamationMarks = s => s.replaceAll('!', '');
