// PREP
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function isMultiple(arr){
    //code here
}
// hint: .filter can be an arrow

// P: the parameter is going to be an arr
// R: we want to return a new arr with the elements are being multiplied by their own index


// my solution
const isMultiple = arr => arr.filter((el, index) => el * index)



// right solution
const multiByIndex = arr => arr.filter((e, i) => i !== 0 && e % i === 0);