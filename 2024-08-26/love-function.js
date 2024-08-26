// PREP
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    // moment of truth
}


// P: the parameter is two different flowers
// R: we want to return petals telling us if we are in love or not depending on even or odd



// my solution

function lovefunc(flower1, flower2){
    if(flower1 % 2 && flower2 !== 0){
        return 'in love'
    }else{
        return 'not in love'
    }
}

// right solution

function lovefunc(flower1, flower2){ 
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) { return true; 
    }else{ return false; 
    } 
}