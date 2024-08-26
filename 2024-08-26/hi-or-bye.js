// PREP
// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

hint: .length and if statement


// my solution

function hiOrBye(number){
    if(number[0] > number.length){
        return 'Hi'
    }else if(number[0] < number.length){
        return 'Bye'
    }else if(number[0] === number.length){
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