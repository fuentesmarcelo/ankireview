// PREP
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    // moment of truth
}

// P: you are given two parameters that are flower1 and flower2
// R: return true if petals are equal to even and odd
// E: flower1 is even and flower2 is odd would return in love
// P: use an if statement to solve the problem

function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
        return 'in love';
    } else {
        return 'not in love';
    }
}