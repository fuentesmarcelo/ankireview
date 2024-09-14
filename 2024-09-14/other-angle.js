// PREP
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
    return 0;
}
// hint: can be arrow


// P: the parameter is two sides of a triangle (a, b) 
// R: we want to return the third side of c
// E: n/a
// P: solve using an arrow function
// we will add a and b together and minus it by 180 degrees


// my solution

const otherAngle = (a,b) => 180 - (a + b);

