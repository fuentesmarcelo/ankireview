// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    // Your solution here
}
//hint: can be an arrow and double conditional

// my solution

const rentalCarCost = d => (40 * d) - (d > 6 ? 50 : 20)

// right solution

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

function rentalCarCost(d) {
return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}