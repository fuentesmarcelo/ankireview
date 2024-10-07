// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //your code here
}
//  hint: .filter() and can be solved as arrow



// my solution

const removeEveryOther = arr => arr.filter(arr => arr % 2 === 0)


// right solution

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);
