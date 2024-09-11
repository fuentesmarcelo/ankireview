// PREP

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(day) {
    // Your solution here
}
//hint: can be an arrow

// P: the parameter is days
// R: we want to return how much discount a person gets depending on how long they rented a car for
// E: n/a
// P: going to solve this with an arrow function


// my solution

const rentalCarCost = day => day * 40 - ((day > 6) ? 50 : (day > 2) 20);


// right solution

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
