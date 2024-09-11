// PREP
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    // ...
}
// hint: math.ceil or while loop also can be solved as arrow

// P: the parameter is numbers 
// R: we want to round up the numbers and multiply by 5
// E: n/a
// P: we will try to solve via arrow function
// first we need to attach numbers and math.ceil and multiply it by 5


// my solution

const roundToNext5 = n => Math.ceil(n/5)*5;