//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
}
//hint: reg fun: declare var, indexOf, Math.min, slice
//hint: arrow: filter, indexOf, Math.min

// my solution

function removeSmallest(numbers){
    let sortedNum = numbers.sort((a,b) => a - b);

}


// right solution

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }