// PREP
//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //code here
};
hint: can use arrow

// P: (distanceToPump, mpg, fuelLeft)
// R: if we will make the pump


// my solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;