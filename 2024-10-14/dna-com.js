// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
// hint: needs a variable, then arrow with .replace() 





// my solution
let pairs = {'G': C, 'C' : G, 'A' : T, 'T': A};
const DNAtoRNA = dna => dna.replace(pairs)

// right solution
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);