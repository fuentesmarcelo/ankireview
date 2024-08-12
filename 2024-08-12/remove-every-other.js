// PREP
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //your code here
}
hint: .filter() and can be solved as arrow

// P: the parameter is an array
// R: return the first element and remove the next element
// E: [1, 2, 3, 4] => [1, 3]
// P: we are going to use the .filter() to remove the second element and solve it as an arrow

// my solutions

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);
