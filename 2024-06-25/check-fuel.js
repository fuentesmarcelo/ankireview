// PREP
//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //code here
};
hint: can use arrow

// P: We are giving the parameter of distanceToPump, mpg, fuelLeft. We also know that the nearest pump is 50 miles away, your car runs 25 miles per gallon, and you have 2 gallons left.
// R: we are tring to return if your car will make it to the next gas station
// E: (50, 25, 5) => true
// P: we are going to use an arrow function
// going to times mpg and fuelLeft and divide by distanceToPump

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;