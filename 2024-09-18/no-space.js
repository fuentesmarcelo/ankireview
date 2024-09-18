// PREP

//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    //code here
}
//hint: .replace() and can be solved an an arrow function

// P: the parameter is a string 
// R: we want to return resultant string
// E: n/a
// P: solve as a regular and arrow function
// we will use .replace()


// my solution

function noSpace(x){
    return x.replace(/ /gi, '')
}


const noSpace = x => x.replace(' ', '')



// right solutions


  
const noSpace = x => x.replace(/ /gi, '');