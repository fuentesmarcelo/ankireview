// PREP
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //your code here
}
hint: .filter() and can be solved as arrow


// P: the parameter is going to be an array
// R: we want to return the array with every other element removed
// E: [1, 2, 3, 4] => [1, 3]
// P: we will solve this not using the arrow function
// we will return the arr with .filter()


// my solution

function removeEveryOther(arr){
    return arr.filter((el, i) => i % 2)
}


// the right solution

function removeEveryOther(arr){
    return arr.filter(function(el, i)){
        return i % 2 === 0;
    }
}