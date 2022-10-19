/* ########################################################################## */

/* Define a function named allIndexesOf that takes in two arguments. The first
* argument should be the array to search and the second argument should be the
* value you want to search for. If the item does not exist in the provided array,
* return an empty array. */

function allIndexesOf(array, input) {
    // create an empty array
    let result = [];
    // loop to check for input, then add to new array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === input) {
            result.push(i);
        }
    }
    // return new array
    return result;
}

let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
console.log(allIndexesOf(fruits, 'apple'));
console.log(allIndexesOf(fruits, 'guava'));
console.log(allIndexesOf(fruits, 'pineapple'));

/* ########################################################################## */

/* Define a function named removeAll(array, value) that takes in two arguments.
* The first argument should be an array and the second argument should be a value
* you wish to remove. */

function removeAll(array, value) {
    // set condition and remove input
    while (fruits.includes(value)) {
        let index = fruits.indexOf(value);
        array.splice(index, 1);
    }
    // return modified array
    return array;
}

// console.log(removeAll(fruits, "pineapple"));
// console.log(removeAll(fruits, "apple"));

/* ########################################################################## */

/* Make a function called randomIntBetween(min, max) that returns a random number
* between the min and the max. */

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomIntBetween(10, 20));
// console.log(randomIntBetween(50, 100));
// console.log(randomIntBetween(1, 4));

/* ########################################################################## */

/* Make a function called coinFlip() that returns either 0 or 1, randomly. */

function coinFlip() {
    let flip = randomIntBetween(0, 1);
    return flip === 1 ? "Heads" : "Tails";
}

// console.log(coinFlip());
// console.log(coinFlip());
// console.log(coinFlip());