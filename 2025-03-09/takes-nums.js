//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function takesInNums(arr){
    //code here
}
//HINT: .sort

// my solution

function takesInNums(arr){
    let arrSorted = arr.sort((a, b) => a - b);
    console.log(arrSorted[1] arrSorted[arrSorted - 2])
}

// right solution

function takesInNums(arr){
    let sortNum = arr.sort((a, b)=>a-b)
    alert(sortNum[1] + sortNum[sortNum.length -2])
    }