//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
//hint: reg fun: declare var, indexOf, Math.min, slice
//hint: arrow: filter, indexOf, Math.min


// we are given an array of integers
// we want to remove the smallest value
// we do not want to mutate the original array/list (can't use.map)
// if we get an empty array return an empty array
// solve via arrow
// use .filter since we want a shallow copy
// inside .ftiler we will need to get the indexOf the numbers with Math.min inside


// my solution
const removeSmallest = numbers => numbers.filter(numbers => )


// right solution
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
