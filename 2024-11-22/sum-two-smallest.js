// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    //Code here
}
// hint: declare of variable sort()


// my solution

function sumTwoSmallestNumbers(numbers) {
    let sortedNumber = numbers.sort((a, b) => a - b);
    return sortedNumber[0] + sortedNumber[1];
}