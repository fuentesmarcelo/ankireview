//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    return [0, 1];
}

//hint 1: for, for, if, return
//hint 2: declare variable, for, declare variable, seen.has, seen.get, seen.set
//hint 3: declare variable, for, declare variable, if, has, get, set


// my solution

function twoSum(numbers, target) {
    let nextNum = new Map();
    for(let i = 0; i < numbers.length; i++){
        let complimentNum = target - numbers[i];
    }
    if(nextNum.has(complimentNum)){
        return nextNum.get(complimentNum)
    }
    return nextNum.set(i, complimentNum[i])
    return [0, 1];
}

// right solution

function twoSum(numbers, target) {
    let numMap = new Map();
    
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(numbers[i], i);
    }
    
    return [];
}