// PREP
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    //Code here
}
hint: sort()

// P: the parameter is numbers
// R: we want to return the sum of the two lowest pso nums in an arr


// my solution

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a + b)
}

// right solution
function sumTwoSmallestNumbers(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b);
    return sortedNum[0] + sortedNum[1];
}