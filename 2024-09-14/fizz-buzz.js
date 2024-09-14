// PREP

//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
function fizzBuzz() {
    //code here
}

// P: the parameter is going to be empty
// R: we want to return fizz if multiples of 3, buzz if multiple of buzz, fizzbuzz if multiples or 3 and 5
// E: n/a
// P: we are going to start with a for loop that goes up to 100 
// next we need to make an if statement that checks for fizz, buzz, and fizzbuzz but start with fizzbuzz


// my solution

function fizzBuzz() {
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return 'fizzbuzz'
        }else if(i % 3 === 0){
            return 'fizz'
        }else if(i % 5 === 0){
            return 'buzz'
        }
    }
}


// right solution


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log(i, 'FizzBuzz');
      } else if (i % 3 === 0) {
        console.log(i, 'Fizz');
      } else if (i % 5 === 0) {
        console.log(i, 'Buzz');
      }
    }
  }