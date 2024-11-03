// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    // ...
}
// hint: math.ceil or while loop also can be solved as arrow



// my solution

const roundToNext5 = n => n >= 5 ? 


// right solution

const roundToNext5 = n => Math.ceil(n / 5) * 5;
