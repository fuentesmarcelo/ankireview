// PREP
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //your code here
}
hint: .filter() and can be solved as arrow

// P: we are given an array as our parameter
// R: we want to return the arr with every second element removed 
// E: [1, 2] => [1]
// P: we are going to solve this as an arrow
// we will use the filter method on the array 

// my solution

const removeEveryOther = arr => arr.filter((el, i) => i % 2 === 0)