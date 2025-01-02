//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    //code here
}
// hint: can be arrow


// my solution

function boolToWord( bool ){
    if(bool == str){
        return 'Yes'
    }else{
        return 'No'
    }
}

// right solution

function boolToWord( bool ){
    if(bool === true){
      return 'Yes';
    }else{
      return 'No'
    }
  }