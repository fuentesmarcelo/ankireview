// PREP 
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function takesInNums(arr){
    //code here
}
//HINT: .sort

// P: the parameter is an array of numbers
// R: alert the sum of the second lowest and second highest number
// E: n/a
// P: first declare a variable of sorted numbers
// next alert using the indexes of the sorted numbers


// my solution

function takesInNums(arr){
    let sortedNums = arr.sort((a, b) => a - b);
    alert sortedNums[1] && sortedNums[sortedNums - 1]
}


// right solution


function takesInNums(arr){
    let sortNum = arr.sort((a, b)=>a-b)
    alert(sortNum[1] + sortNum[sortNum.length -2])
}