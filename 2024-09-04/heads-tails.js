// PREP

//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails(){
    //code here
}
//hint: Math.random() and can be solved as an arrow

// P: the parameter empty
// R: we want to return heads or tails as randomly as possible
// E: n/a
// P: first we are going to declare a variable that gives the results random
// make if statement to give the results

// my solution
function headsOrTails(){
    let random = Math.random()
    if(random < 1){
        return 'tails'
    }else{
        return 'heads'
    }    
}


// right solution
function headsOrTails(){
    let result = Math.random()
    if(result < .5){
    return 'heads'
    }else{
    return 'tails'
    }
}