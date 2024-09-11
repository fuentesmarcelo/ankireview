// PREP

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
// hint: declare a var, indexOf, Math.min, .slice, .filter **can be solved with arrow


// P: the parameter is numbers
// R: we want to remove the smallest value without mutatign the original array/list
// E: n/a
// P: we will first declare a variable of the index of the smallest number
// then we will use numbers with .slice 


// my solution

function removeSmallest(numbers) {
    let indexOfMin = numbers.Math.min(...numbers)
    return [...numbers.slice(0, 1)];
}


// right solution

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }