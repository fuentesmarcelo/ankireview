//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

function findDifference(a, b) {
    //loading...
}
// HINT: get absolute num and reduce and minus by reduce

// my solution

function findDifference(a, b) {
    return Math.abs(a.reduce((c, acc) => c + acc) - b.reduce((c, acc) => c +acc))
}

// right solution


function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=> a*b))
  }