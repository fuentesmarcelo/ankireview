// PREP
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

function solve(s){
    //..
}
// hint: for loop and if statment and return with arrow


// P: we are given a string that has a mix of uppercase and lowercase
// R: we want to convert the string to either lowercase or uppercase



// my solution

function solve(s){
    let lowerCount = 0
    let upperCount = 0

    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i].toUpperCase()){
            return upperCount++;
        }else{
            return lowerCount++;
        }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}
