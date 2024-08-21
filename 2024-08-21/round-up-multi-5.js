// PREP
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    // ...
}
// hint: math.ceil or while loop also can be solved as arrow

// P: our parameter in the function is a number 
// R: we want to return the num rounded and multiplied by 5
// E: 2 => 10
// P: we will solve as a regular function
// we will return it the number using Math.ceil and multiply that number by 5

// my solution

function roundToNext5(n){
    return n.Math.ceil(n*5);
}


// right solution

function roundToNext5(n){
    return n.Math.ceil(n/5)*5;
}