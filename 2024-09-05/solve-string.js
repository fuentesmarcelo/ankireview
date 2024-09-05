// PREP
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: declare two variables, for loop, if statement, length, toUpper or toLower and if statment and return with arrow

// P: the parameter is a string that may have mixed uppercase and lowercase letters
// R: convert the string to either lowercase only or uppercase only
// E: n/a
// P: declare two variable with either toUpperCase() or toLowerCase()
// make a for loop
// return an if statment
// add the sum of uppercase 
// else return the lowerecase


// my solution

function solve(s){
    let upperC = s.toUpperCase()
    let lowerC = s.toLowerCase()
    for(let i = 0; i < s.length; i++){
        if(s.length < upperC){
            return upperC++
        }else{
            return lowerC++
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