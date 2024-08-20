// PREP

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    return [];
  }
hint: declare a var, indexOf, Math.min, .slice, .filter **can be solved with arrow


// P: we are given an arr of integers 
// R: we want to return the arr with the lowest value removed and not mutate the original arr
// E: [10,20] => [20]
// P: we are going to declare a variable that has the index of the math min of a number
// we are going to return a slice of the variable and filter


// my solution

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
