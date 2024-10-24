//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
    //your code goes here   
}
// hint: can solve with arrow function



// my solution

const hoopCount = n => n > 9 ? 'Great, now move on to tricks' : 'Keep at it until you get it';

const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
