// PREP
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: declare two variables, for loop, if statement, length, toUpper or toLower and if statment and return with arrow

// P: the parameter is a string
// R: we want to return a str that converts uppercase or lowercase letters


// my solution

function solve(s){
    let upperCase = s.toUpperCase();
    let lowerCase = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        return upperCase++;
    }else{
        return lowerCase++;
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