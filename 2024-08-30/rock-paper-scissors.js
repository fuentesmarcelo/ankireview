// PREP
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    //code here
}


// P: the parameter will be will be empty
// R: we want to return rock, paper, scissors as random as possible
// E: n/a
// P: we want to add 33% to rock
// 66% to paper
// 99% to scissors
// solve using a regular function
// solve with an if statement


function rockPaperScissors(){
    if(rock < 33%){
        return 'rock'
    }else if(paper < 66%){
        return 'paper'
    }else{
        return 'scissors'
    }
}


//right solution
function rockPaperScissors(){
    let random = Math.random()
    if(random < .33){
    return 'rock'
    }else if(random < .66){
    return 'paper'
    }else{
    return 'scissors'
    }
    }