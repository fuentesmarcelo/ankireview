// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    //code here
}
//hint: filter can be arrow

// my solution

function divisibleBy(numbers, divisor){
    return numbers.filter(numbers => numbers % divisor === 0);
}

// right solution

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}
    
    const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
    