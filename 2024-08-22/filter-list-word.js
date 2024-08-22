// PREP
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// return an array containing all of the strings in the input array except those that match strings in geese
};
// hint: filter and indexOf or filter and .includes

// P: the parameter is birds
// R: we want to return birds but with specific geese removed


// my solution
function gooseFilter(birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(birds => indexOf(birds) !== geese)
}


// right solution

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};