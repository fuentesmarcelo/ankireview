// PREP
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    //Code here
}    
hint: sort()

// P: numbers with positive integers in an arr
// R: we want to return the sum of the lowest positive numbers given an arr of minimum 4 positive integers
// E: [2, 4, 6, 8] => [2, 4]
        // [4, 6, 18, 296] => [4, 6]
// P: we need to first sort the numbers from smallest to biggest
// save a variable with the sorted arr
// return the sorted arr

// my solution
function sumTwoSmallestNumbers(numbers){
    let sortedNums = numbers.sort((a, b) => a - b);
    return sortedNums[0] + sortedNums[1];
}
