//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    //code here
}
// hint: can be arrow

// my solution

const boolToWord = bool => bool == true ? 'Yes' : 'No';

// right solution

function boolToWord( bool ){
    if(bool === true){
      return 'Yes';
    }else{
      return 'No'
    }
  }
  
  const boolToWord = bool => bool === true? 'Yes' : 'No';
  
  const boolToWord = bool => bool ? 'Yes' : 'No';