// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    // Write your code here
}
// HINT: use a ternary expression 

//  my solution

function combat(health, damage) {
    return 
}


// right solution

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}
or 
const combat = (health, damage) => Math.max(0, health - damage);
or 
function combat(health, damage) {
  if (health - damage < 0){
    return 0;
  }else{
    return health - damage;
  }
}
