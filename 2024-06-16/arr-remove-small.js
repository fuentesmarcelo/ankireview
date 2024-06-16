// PREP
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
hint: declare a var, indexOf, Math.min, .slice, .filter **can be solved with arrow


// P: the parameter would be a number that is never empty 
// R: return with smallest arr removed
// E: [10, 20, 30] => [20, 30]
// P: we will solve not using an arrow
// we will first declare a variable that takes the indexOf a Math.min of a number
// the new variable we will return with .slice



// my solution

function removeSmallest(numbers){
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOf), ...numbers.slice(indexOfMin + 1)];
}