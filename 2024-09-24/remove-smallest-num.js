// PREP

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
// hint: declare a var, indexOf, Math.min, .slice, .filter **can be solved with arrow


// P: the parameter is an array of integers
// R: return with the smallest value removed without mutating the original array/list
// E: n/a
// P: we first need to declare a variable


// my solution

function removeSmallest(numbers) {
    let 
}


const removeSmallest = numbers => Math.min(numbers.filter())


// right solution

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
