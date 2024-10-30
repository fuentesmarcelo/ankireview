//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
//hint: reg fun: declare var, indexOf, Math.min, slice
//hint: arrow: filter, indexOf, Math.min



// my solution

const removeSmallest = numbers => numbers.filter(numbers => Math.min(numbers.indexOf(0)))


// right solution
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
