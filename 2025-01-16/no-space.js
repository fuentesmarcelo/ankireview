//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    //code here
}
//hint: .replace() and can be solved an an arrow function


// my solution

const noSpace = x => x.replace(/./gi, '')

// right solution

function noSpace(x){
    return x.replace(/ /gi, '');
  }
  
  const noSpace = x => x.replace(/ /gi, '');