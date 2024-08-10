// PREP
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    // Your solution here
}
hint: can be an arrow

// P: your parameter is days
// R: return the cost with discounts 
// E: 6 days should return $20 off 
// P: going to solve using an arrow function
// rentalCarCost will be the function name
// d will be the parameter

// my solution

const rentalCarCost = d => d * 40 - ((d>6) ? 50: (d > 2)? 20 :0); 