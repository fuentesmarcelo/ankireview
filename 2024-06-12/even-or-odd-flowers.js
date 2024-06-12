// PREP
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    // moment of truth
}

// P: we are given two parameters of flower1 and flower2
// R: return in love with even and odd
// E: returns a positive number and neg number will return in love
// P: use an if statement with an arrow function



function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}