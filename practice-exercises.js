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

// let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// console.log(allIndexesOf(fruits, 'apple'));
// console.log(allIndexesOf(fruits, 'guava'));
// console.log(allIndexesOf(fruits, 'pineapple'));

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

/* ########################################################################## */

/* Make a function called twoDice() that returns the sum of rolling two six -
* sided dice. */

function twoDice() {
    let roll1 = randomIntBetween(1, 6);
    let roll2 = randomIntBetween(1, 6);
    return `${roll1} + ${roll2} = ${roll1 + roll2}`;
}

// console.log(twoDice());
// console.log(twoDice());
// console.log(twoDice());

/* ########################################################################## */

/* Make a function called twentySidedDie() that returns a random integer between
* 1 and 20. */

function twentySidedDie() {
    return randomIntBetween(1, 20);
}

/* Make a function called twelveSidedDie() that returns a random integer between
* 1 and 12. */

function twelveSidedDie() {
    return randomIntBetween(1, 12);
}

/* Make a function called tetrahedron() that returns a random integer between 1
 * and 4. */

function tetrahedron() {
    return randomIntBetween(1, 4);
}

/* Make a function called rollDie() that returns an integer between 1 and 6. */

function rollDie() {
    return randomIntBetween(1, 6);
}

/* ########################################################################## */

/* Make a function called listOfRolls(num) that takes in a number containing how
* many 6-sided dice rolls you want to make. The listOfRolls function should return
* an array of that length, where each element of the array is the result of the
* rollDie function. */

function listOfRolls(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        let roll = rollDie();
        array.push(roll);
    } return array;
}

// console.log(listOfRolls((3)));
// console.log(listOfRolls((4)));
// console.log(listOfRolls((5)));

/* ########################################################################## */

/* Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
* The first argument is the number of rolls you want to make. The second argument
* is a function that contains the function definition for the type of die you want
* to roll. For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then
* the function will return an array containing one value that is the result of
* calling the tetrahedron function. */

function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    let array = [];
    for (let i = 0; i < numberOfRolls; i++) {
        let roll = diceFunction();
        array.push(roll);
    } return array;
}

// console.log(listOfRollsFromDieFunc(1, tetrahedron));
// console.log(listOfRollsFromDieFunc(3, rollDie));
// console.log(listOfRollsFromDieFunc(5, twelveSidedDie));

/* ########################################################################## */

/* Write a function named first() that returns only the first element of an array */

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const first = (array) => array[0];

// console.log(first(months));

/* ########################################################################## */

/* Write a function named secondToLast() that returns the second to last element */

const secondToLast = (array) => array[array.length -2];

// console.log(secondToLast(months));

/* ########################################################################## */

/* Write a function named rest() that takes an array and returns an array
* containing everything except the first element. */

function rest(array) {
    array.pop();
    array.shift();
    return array;
}

// console.log(rest(months));

/* ########################################################################## */

/* Write a function named getLongestString that takes in an array of strings and
* returns the longest string of that array */

function getLongestString(array) {
    // find length of each string in the array
    let stringLength = [];
    array.forEach(i => {
        stringLength.push(i.length);
    })
    // find which is the longest
    let longest = Math.max(...stringLength);
    // find longest string and return it
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === longest) {
            return array[i];
        }
    }
}

// console.log(getLongestString(["hello", "hey", "hi"]));
// console.log(getLongestString(["hello", "heyyyyy", "hi"]));

/* ########################################################################## */

/* Write a function named getShortestString that takes in an array of strings
* and returns the shortest string in that array. */

function getShortestString(array) {
    // find length of each string in the array
    let stringLength = [];
    array.forEach(i => {
        stringLength.push(i.length);
    })
    // find which is the shortest
    let shortest = Math.min(...stringLength);
    // find shortest string and return it
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === shortest) {
            return array[i];
        }
    }
}

// console.log(getShortestString(["hello", "hey", "hi"]));
// console.log(getShortestString(["hello", "heyyyyy", "hi"]));

/* ########################################################################## */

/* Write a function named addTwoArrays that takes in two, one dimensional arrays.
* The function should return a single array containing all the elements of the
* first array along with all the elements of the second array
* Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6] */

// function addTwoArrays(array1, array2) {
//     let both = array1.join('').concat(array2.join(''));
//     return both.split('');
// }

const addTwoArrays = (first, second) =>
    (first.join('').concat(second.join(''))).split('');

// console.log(addTwoArrays([1, 2, 3], [4, 5, 6]));

/* ########################################################################## */

/* Write a function named getUniqueValues that takes in an array and returns the
* array without any duplicates.
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"] */

function getUniqueValues(array) {
    let unique = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return unique;
}

// console.log(getUniqueValues(["a", "b", "a", "b", "c", "c"]))

/* ########################################################################## */

/* Write a function named reverseArray that takes in an array and returns it
* reversed, but without altering the original array. */

let numbers = ["1", "2", "3"]

function reverseArray(array) {
    let reversed = [];
    for (let i = 0; i < array.length; i++) {
            reversed.unshift(array[i]);
    }
    return reversed;
}

console.log(reverseArray(numbers));
console.log(numbers);


