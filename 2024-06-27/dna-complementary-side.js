// PREP
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
hint: .replace()

// P: we are giving a parameter of dna which is never empty 
// R: we want to return the complementary side of the dna from the one we get
// E: if we get T, we want to get A or if we get C, we want to get G, and vice versa
// P: we make a varbile that makes switches for the dna string 
// make an arrow function with .replace() 

// my solution

let pairs = {A:'T', T:'A', C:'G', G:'C'}
const dnaStrand = dna => dna.replace(/./g,c => pairs[c]);