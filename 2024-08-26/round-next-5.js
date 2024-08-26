// PREP
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    // ...
}
// hint: math.ceil or while loop also can be solved as arrow

// P: the parameter is numbers 
// R: return the num getting times by 5


// my solution

function roundToNext5(n){
    return n.Math.ceil(n/5)*5;
}

// right solution
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}