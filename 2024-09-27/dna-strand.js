// PREP

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
// hint: needs a variable, then arrow with .replace() 


// P: the parameter is dna
// R: we want to return the compliments of the dna strand
// E: c => g 
// P: n/a



// my solution

function dnaStrand(dna){
    let pairs = {A; 'T', T; 'A', C; 'G', G; 'C'};
    return dna.replace(pairs);
}


// right solution

function dnaStrand(dna){
    let pairs = {A:'T',T:'A',C:'G',G:'C'};
    return dna.replace(/./g, c => pairs[c]);
}