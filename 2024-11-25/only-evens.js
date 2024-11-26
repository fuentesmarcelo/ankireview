//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

function onlyEvens(arr){
    //code here
}
//hint: .filter() and arrow function


// my solution

function onlyEvens(arr){
    return arr.filter(num => num % 2 === 0)
}