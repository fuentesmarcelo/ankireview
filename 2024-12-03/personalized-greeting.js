// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message: 'hello boss' or 'hello guest

function greet (name, owner) {
    if(name === owner){
        return 'hello boss'
    }else{
        return 'hello guest'
    }