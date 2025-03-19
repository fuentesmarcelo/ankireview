// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: declare two variables, for loop, if statement, length, toUpper/toLower, return with arrow boolean

// my solution

function solve(s){
    let mixUpper = 
    let mixLower =
    for(let i = 0; i < 0; i++){
        if()
    }
}

// right solutions

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