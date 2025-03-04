//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

// hint: .search() and if

// my solution

let str = 'bat cat apple mat'
str.search('apple')

// right solution

let str = 'Bob Duck apple dog'
if(str.search('apple') !== -1){
console.log('yes')
}else{
console.log('no')
}