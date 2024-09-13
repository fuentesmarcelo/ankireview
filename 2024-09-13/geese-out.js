// PREP

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return an array containing all of the strings in the input array except those that match strings in geese
};
// hint: filter and indexOf or filter and .includes

// P: the parameter are birds
// R: we want to return birds but with geese filtered out
// E: n/a
// P: we will first use .filter()
// within we will use .indexOf


// my solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(birds => geese.indexOf(birds));
}


// right solution


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
    };