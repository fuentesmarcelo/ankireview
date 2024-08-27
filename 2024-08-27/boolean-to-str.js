// PREP
//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    //code here
}

// P: the parameter is a boolean 
// R: return is as a str of the boolean


// my solution

function booleanToString(b){
    return b.toString();
}


// right solution

function booleanToString(b){
    if(b === true){
      return 'true'
    }else{
      return 'false'
    }
  }