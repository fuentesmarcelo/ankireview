// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
    return 0;
}
// hint: can be arrow


// my solution

function otherAngle(a, b) {
    let c = 180 - a - b;
    return c;
}