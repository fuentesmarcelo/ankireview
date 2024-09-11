// PREP

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //your code here
}
// hint: .filter() and can be solved as arrow

// P: the parameter is an array 
// R: we want to return the array with every second element removed from the array
// E: n/a
// P: we will want to solve this as an arrow function
//  we will attach the arr with .filter() out the second element


// my solution

const removeEveryOther = arr => arr.filter(arr => arr % 2 === 0)


// right solution

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);
