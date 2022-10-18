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