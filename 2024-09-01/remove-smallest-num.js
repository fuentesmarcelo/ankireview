// PREP
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
// hint: declare a var, indexOf, Math.min, .slice, .filter **can be solved with arrow

// P: an array of inegers
// R: return the array of integers with the smallest value removeed
// E: [1, 2, 3, 4] => [2, 3, 4]
// P: solve using a regular function
// we are going to declare a variable that gets the index of the min num
// we are going to use the .slice with the new variable


// my solution

function removeSmallest(numbers) {
    let indexOfMin = numbers.Math.min(...numbers);
    return ([...numbers].slice(indexOfMin, indexOfMin +1))
}

// right solution
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
