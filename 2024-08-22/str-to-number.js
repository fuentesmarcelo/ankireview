// PREP
// We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function(str){
    // put your code here
    return null;
}
hint: Number() or parseInt()

// P: the parameter given is a string
// R: we are trying to return the string into a number
// E: 'a' => 9
// P: we will solve regular function with number()

// my solution
const stringToNumber = function (str){
    return str.Number(num)
}


// right solution

const stringToNumber = function(str){
    let num = Number(str);
    return num;
}

var stringToNumber = function(str){
    return parseInt(str);
  }