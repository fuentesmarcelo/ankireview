// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: declare two variables, for loop, if statement, length, toUpper/toLower, return with arrow boolean

// my solution

function solve(s){
    // declare two variables
    let upperCount = 0;
    let lowerCount = 0;

    // for loop that goes through str
    for(let i = 0; i < s.length; i++){
        if(s[i] > 0){
            return upperCount++;
        }else{
            return lowerCount++;
        }
    }
    return lowerCount > upperCount ? s.toLower():s.toUpper()
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