// PREP
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
hint: declare a var, indexOf, Math.min, .slice, .filter **can be solved with arrow

// P: the parameter is a number
// R: we want to return the arr with smallest value removed


// my solution

function removeSmallest(numbers){
    let num = numbers.indexOf(Math.min(...numbers));
    return num
}

// right solution 
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));

  