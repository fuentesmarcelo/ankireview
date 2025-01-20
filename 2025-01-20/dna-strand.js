// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
// hint: needs a variable, then arrow with .replace() 


// my solution

let pairs = {A: "T", T: 'A', C: "G", G: "C"};
const dnaStrand = dna => dna.replace(/./gi, 'pairs')

// right solution

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

function dnaStrand(dna){
let pairs = {A:'T',T:'A',C:'G',G:'C'};
return dna.replace(/./g, c => pairs[c]);
}