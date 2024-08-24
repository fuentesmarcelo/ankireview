// PREP
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
    return 0;
}
hint: can be arrow

// P: the parameter is two sides of a triangle (a, b)
// R: we want to return the third side of the triangle 


// my solution

function otherAngle(a, b) {
    return (a + b)*2 ;
}

// right solution

function otherAngle(a, b) {
    return 180 - (a + b);
}