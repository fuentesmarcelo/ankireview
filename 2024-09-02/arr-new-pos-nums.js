// PREP
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

hint: .filter() and arrow function

// P: the parameter is an arr of nums
// R: we want to return the arr of nums that includes every even num


const evenArr = arr => arr.filter((el, index) => index % 2 === 0)