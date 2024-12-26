//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
    //code here
}
//hint: reduce and can be solved as an arrow (two plus)


// my solution

const sumMix = x => x.reduce((c, acc) => acc ++ c)


// right solution

const sumMix=x=>x.reduce((a,b)=>+b+a,0)