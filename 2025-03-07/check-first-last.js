// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function checkFirstAndLast(arr){
    //code here
}
//hint: .length and if statement

// my solution

function checkFirstAndLast(arr){
    if(arr[0] < arr.length){
        return 'Hi'
    }else if(arr[0] > arr.length){
        return 'Bye'
    }else{
        return 'We close in an hour'
    }
}

// right solution

function checkFirstAndLast(arr){
    if(arr[0] < arr[arr.length - 1]){
    alert('Hi')
    }else if(arr[0] > arr[arr.length -1]){
    alert('Bye')
    }else{
    alert('We clsoe in an hour')
    }
    }