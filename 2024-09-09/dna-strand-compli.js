// PREP

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return ""
}
// hint: needs a variable, then arrow with .replace() 

// P: the parameter is the dna strand
// R: we want to return the compliments of the dna strand
// E: n/a
// P: needs a variable, then arrow with .replace()


// my solution

function dnaStrand(dna){
    let pairs = {'A': T, 'T': A, 'C': G, 'G': C}
    return ""
}

let pairs = {'A': T, 'T': A, 'C': G, 'G': C}

const dnaStrand = dna => dna.replace(/./g, dna(pairs))


// right solution

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);