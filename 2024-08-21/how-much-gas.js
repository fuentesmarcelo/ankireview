// PREP 
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    // Your solution here
}
//hint: can be an arrow


// P: the parameter is how many days you are renting the car
// R: we want to return the amount of discount depending on days rented


// my solution

const rentalCarCost = d => (d * 40) - ? (d > 6) - 50 : (d > 2) - 20; 

// right solution 
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
