// * High and Low *
//
function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return Math.max(...numbers) + " " + Math.min(...numbers);
}

// let numbers = ("1 2 3 4 5");
// console.log(highAndLow(numbers));

//
// * Get the Middle Character *
//
function getMiddle(s) {
    let length = s.length;
    let halfway = length / 2;
    const oddOrEven = (length) => length % 2 === 0;
    if (oddOrEven(length) === true) {
        // middle two
        return s.substring(halfway - 1, halfway + 1);
    } else {
        // middle one
        return s.substring(halfway, halfway + 1);
    }
}
// console.log(getMiddle("ccdcc"));
// console.log(getMiddle("aaabbaaa"));
//
// * A Needle in the Haystack *
//
function findNeedle(haystack) {
    let position = haystack.indexOf("needle");
    return "Needle found at position " + position;
}
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
//
// * Abbreviate a Two Word Name *
//
function abbrevName(name){
    let space = name.indexOf(" ");
    return (name.substring(0, 1) + "." + (name.substring(space+1, space+2))).toUpperCase();
}
// console.log(abbrevName("kaylee morris"));
// console.log(abbrevName("joshua mullins"));
//
// * Return Negative *
//
const makeNegative = (num) => num > 0 ? num * -1 : num;
//
// * You Only Need One *
//
const check = (a, x) => a.includes(x);
//
// * Find Opposite *
//
const opposite = (number) => -number;
// console.log(opposite(1));
// console.log(opposite(0));
// console.log(opposite(-12525220.3325));
//
// * Grasshopper - Personalized Greeting *
//
// const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";
// console.log(greet("Kaylee", "Kaylee"));
// console.log(greet("Joshua", "Kaylee"));
//
// * Convert Number to Reversed Array of Digits *
//
function digitize(n) {
    n.toString().split("").reverse();
}
//
// console.log(digitize(12345));

function spookyTime(starbucks) {
    if (starbucks.includes("pumpkin spice latte") === true) {
        return "spooky szn";
    } else {
        return false;
    }
}

// console.log(spookyTime("pumpkin spice latte"));

// * Find Average *

// let array = [];

//  console.log(array.length);
//
function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}
//
// console.log(findAverage(array));

// * Count Sheep *

let countSheep = function (num){
    let sheep = "";
    for (let i = 1; i <= num; i++) {
        sheep += i + " sheep...";
    }
    return sheep;
}

// console.log(countSheep(3));

// * Jaden Case // *

// String.prototype.toJadenCase = function (tweet) {
//     tweet = tweet.split(" ");
//     return tweet;
//     // tweet.forEach(function(word) {
//     //     word.toString();
//     // })
// };

// * Exes and Ohs // * Complete

// function XO(str) {
//     str = str.toUpperCase();
//     let strCount = str.length;
//     let xCount = strCount - (str.replace(/X/g, '').length);
//     let oCount = strCount - (str.replace(/O/g, '').length);
//     return xCount === oCount;
// }
//
// console.log(XO('XO'));
// console.log(XO('XOXOXO'));
// console.log(XO('XOOO'));
// console.log(XO('xxxO'));

// * School Paperwork // * Complete

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n * m;
    }
}

// * Remove First and Last Character // * Complete

// function removeChar(str){
//     return str.substring(1, str.length - 1);
// }

const removeChar = (str) => str.substring(1, str.length - 1);

// console.log(removeChar('hello'));

// * Hello World // * Complete

const greet = (input) => "hello world!";

// console.log(greet());

// * Validate Pin // *







