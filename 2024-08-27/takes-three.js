// PREP

//Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

hint: min and max

// my solution
function threeNumsLowAndHigh (n1,n2,n3) {
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`The lowest num is ${min} and the highest num is ${max}`)
    }
    threeNumsLowAndHigh(100,50,25)