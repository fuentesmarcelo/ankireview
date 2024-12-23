// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    //code here
}
//hint: filter can be arrow

// my solution

const divisibleBy = (numbers, divisor) => numbers.filter(numbers => numbers % divisor === 0)

// right solution

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
