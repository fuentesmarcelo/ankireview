// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.

function smallEnough(a, limit){
    // code here
}
// HINT: run a loop and return a boolean

function smallEnough(a, limit){
    for(let i = 0; i < limit.length; i++){
        return 
    }
}


// right solution

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }
  or
  function smallEnough(a, limit){
      for (let i = 0; i < a.length; i++){
        if (a[i] > limit) {
          return false
      }
    }
    return true
  
  }