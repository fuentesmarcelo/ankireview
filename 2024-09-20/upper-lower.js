// PREP

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: declare two variables, for loop, if statement, length, toUpper or toLower and if statment and return with arrow


// P: the parameter is a string that may have mixed upper or lowercase letters
// R: we want to return the string with either lowercase or uppercase
// E: n/a
// P: first we need to declare two variables for upper or lower case
// we will then make a for loop
// next line we will make an if statement with the string attached with length
// returning upper and lower
// outside the for loop you return an arrow


// my solution

function solve(s){
    let upperC = s.toUpperCase();
    let lowerC = s.toLowerCase();

    for(){
        if(let i = 0; i < s.length; i++){
            return upperC
        }else{
            return lowerC
        }
    }
    const solve = s =
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