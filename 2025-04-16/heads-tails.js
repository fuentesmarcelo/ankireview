//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails(){
    //code here
}
//hint: Math.random() and can be solved as an arrow


// my solution

function headsOrTails(){
    let result = Math.random();
    return result
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
    console.log(headsOrTails())
    
    or 
    
    const headsOrTails = () => Math.random() < 0.5 ? 'heads' : 'tails';