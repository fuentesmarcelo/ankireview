// PREP
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
hint: .replace()

// P: we are given a parameter with dna
// R: return the complementary of the dna strand
// E: if A return T or if C return G


// my solution

function dnaStrand(dna){
    return ""
}

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);