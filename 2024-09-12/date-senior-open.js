// PREP

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
    // ...
}
//hint: .map

// P: the parameter will be the age and handicap
// R: we want to return where the player will be placed in the croquet club
// E: 55 years old and 8 handicap places the player in Senior
// P: we will solve in a regular function
// we are going to use an if statement that checks the age and handicap


// my solution

function openOrSenior(data){
    if(age > 54 && handicap >7){
        return 'Senior'
    }else{
        return 'Open'
    }
}

// right solution

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
   }