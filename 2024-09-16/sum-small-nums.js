// PREP

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    //Code here
}
// hint: declare of variable sort()


// P: the parameter is are numbers 
// R: we want to sum the two lowest numbers of an array
// E: n/a
// P: we need to declare a variable that sorts the parameter
// next we need to return the sorted number


// my solution

function sumTwoSmallestNumbers(numbers) {
    let sortedNum = numbers.sort((a, b) => a -b)
    return sortedNum.reduce((a, b) => )
}


// right solution 

function sumTwoSmallestNumbers(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b);
   return sortedNum[0] + sortedNum[1];
}