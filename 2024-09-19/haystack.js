// PREP

//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
//Example(Input --> Output)
//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
hint: .indexOf() and arrow


// P: the parameter is going to be haystack
// R: we want to return the needle inside the findNeedle 
// E: n/a
// P: we will try to solve this via an arrow function
// the function will be findNeedle
// the paramter will be the haystack
// we will attach indexOf to needle
// inside haystack we have needle not equaling -1


// my solution

const findNeedle = haystack => needle.indexOf(haystack('needle'));

// right solution

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;