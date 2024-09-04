// PREP
//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

function fizzBuzz() {
    //code here
}

// P: the parameter is empty
// R: we want to return fizz if multiple of 3, buzz if multiple of 5, fizzbuss at multiples of 3 and 5


// my solution

function fizzbuzz(num){
    if(num % 3 === 0){
        return 'fizz'
    }else if(num % 5 === 0){
        return 'buzz'
    }else if(num % 3 === 0 %% num % 5 === 0){
        return 'fizzbuzz'
    }
    for(let i = 0; i <= 100; i++)
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