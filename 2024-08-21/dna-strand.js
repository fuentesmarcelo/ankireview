// PREP

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
hint: needs a variable, then arrow with .replace() 

// P: we are given the dna strand
// R: we need to return the complementary of the dna strand
// E: a and t or c and g
// P: first declare a variable of pairs in a curly brac 
//  then solve using an arrow function with .replace()

// my solution

let pairs = {A: 'T',T:'A',G:'C',C:'G'};
const dnaStrand = dna => dna.replace(/./g, pairs[i]);

// right solution

let pairs = {A: 'T',T:'A',G:'C',C:'G'};
const dnaStrand = dna => dna.replace(/./g,i => pairs[i]);