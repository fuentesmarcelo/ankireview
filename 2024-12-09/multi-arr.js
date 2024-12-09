//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function isMultiple(arr){
    //code here
}
// hint: .filter can be an arrow

// my solution

const isMultiple = arr => arr.filter(num = num )

// right solution

const multiByIndex = arr => arr.filter((e, i) => i !== 0 && e % i === 0);