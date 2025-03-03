//This function should test if the factor is a factor of base.
//Return true if it is a factor or false if it is not.
//hint: use mod operator % could use arrow

function checkForFactor(base, factor){
    //code here
}

// my solution

function checkForFactor(base, factor){
    if(base % factor === 0){
        return true;
    }else{
        return false;
    }
}

// right solution

function checkForFactor (base, factor) {
    if(base % factor !== 0){
      return false;
    }else{
      return true;
    }
  }
  
  const checkForFactor = (base, factor) => base % factor === 0;
  