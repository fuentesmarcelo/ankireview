// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
    //code here
}
    
// HINT: address the null, remember to sort, make sure total has a variable and run a loop

// my solution

function sumArray(array) {
    let sum = 0 || null;
    let sortedArr = array.sort((a, b) => a - b, 0);
    let total = sortedArr + sum;
    for(let i = 0; i < array.length; i++){
        return 
    }
}

// right solution

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }