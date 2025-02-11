// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // return an array containing all of the strings in the input array except those that match strings in geese
};
// hint: filter and indexOf or filter and .includes]

// my solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(birds => birds.indexOf('geese' !== -1));
}

// right solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
    };
    
    function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
    };