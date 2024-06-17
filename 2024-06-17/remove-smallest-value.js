// PREP
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
hint: declare a var, indexOf, Math.min, .slice **can be solved with arrow

// P: we are given an array of integers
// R: We are trying to return the array with the smallest value removed. 
// E: [1, 2, 3, 4] => [2, 3, 4]
// P: we are going to try to solve this via an arrow function
// first we will declare a variable
// '



function removeSmallest(numbers) {
    let smallRemove = numbers.indexOf(Math.min);

    return [];
}

const removeSmallest = numbers.