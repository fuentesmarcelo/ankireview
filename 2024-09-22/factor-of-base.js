// PREP

//This function should test if the factor is a factor of base.
//Return true if it is a factor or false if it is not.

// hint: use mod operator % could use arrow


// my solution

const factorOfBase = (factor, base) => factor % base === 0;


// right solution

const checkForFactor = (base, factor) => base % factor === 0;
