// PREP
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
hint: .replace() and declare of variable and arrow function too


// P: the parameter is a dna strand
// R: we want to return the complementary of the strands
// E: a gives us t and vice versa
// P: we will declare a variable and use .replace


// my solution


let pairs = {A:'T', T:'A', C:'G', G:'C'};
const dnaStrand = dna => dna.replace(/./g, c => pairs[c]);