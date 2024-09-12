// PREP

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //code here
};
// hint: can use arrow

// P: the parameter is the distance to pump, mpg, and fuel left
// R: we want to return if we would make it to the fueling station
// E: n/a
// P: we will solve this using an arrow function
// to calculate if we would make it we will use the conditional mpa * fuelLeft if its equal to or greater than


// my solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump ? 'yes' : 'no';


// right solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
