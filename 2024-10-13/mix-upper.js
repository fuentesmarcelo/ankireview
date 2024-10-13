// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: declare two variables, for loop, if statement, length, toUpper or toLower and if statment and return with arrow boolean


// we are given a parameter of a string that is a mix of upper and lowercase letter
// we want to return the string with only lowercase or uppercase
// first solve as a regular function
// we will declare two variables, first one being uppercase and second being lower case and make them equal to 0
// we then will make a for loop then proceeded with the if statement(make sure we have the length of the string)
// depending on the result we will return toUpper/toLower
// finally make another if statement and return with an arrow boolean


// my solution
function solve(s){
    let upper = 0;
    let lower = 0;
    for(let i = 0; i < s.length; i++){
        if(upper[i] > lower[i]){
            return upper++;
        }else{
            return lower++
        }
    }
    
}





// right solution
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}