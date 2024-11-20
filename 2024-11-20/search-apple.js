//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// hint: .search() and if


// my solution

let str = 'apple, cat, computer';
if(str.search(apple)){
    return true;
}else{
    return false;
}

// right solution

let str = 'Bob Duck apple dog'
if(str.search('apple') !== -1){
console.log('yes')
}else{
console.log('no')
}