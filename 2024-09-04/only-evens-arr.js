// PREP
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

function onlyEvens(arr){
    //code here
}
//hint: .filter() and arrow function

// P: the parameter is an array of numbers
// R: we want to return a new array of numbers that include every even number
// E: n/a
// P: we will solve this using an arrow function
// we will us .filter on the arr
// within the .filter we will using an arrow with num to get the modeulus so its positive


// my solution

const onlyEvens = arr => arr.filter(num => num % 2 === 0)