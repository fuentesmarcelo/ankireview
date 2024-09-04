// PREP
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return an array containing all of the strings in the input array except those that match strings in geese
};
// hint: filter and indexOf or filter and .includes

// P: the parameter is birds which includes different species
// R: we want to return birds but with any type of geese filtered out
// E: n/a
// P: we are first going to using .filter on birds
// within the filter we want it attached geese to indexOf of birds as the parameter/argument


// my solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(geese => geese.indexOf(birds) !== 0)
}

// right solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};
    