// * High and Low // * Complete
//
function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return Math.max(...numbers) + " " + Math.min(...numbers);
}

// let numbers = ("1 2 3 4 5");
// console.log(highAndLow(numbers));

//
// * Get the Middle Character // * Complete
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
// * A Needle in the Haystack // * Complete
//
function findNeedle(haystack) {
    let position = haystack.indexOf("needle");
    return "Needle found at position " + position;
}
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
//
// * Abbreviate a Two Word Name // * Complete
//
function abbrevName(name){
    let space = name.indexOf(" ");
    return (name.substring(0, 1) + "." + (name.substring(space+1, space+2))).toUpperCase();
}
// console.log(abbrevName("kaylee morris"));
// console.log(abbrevName("joshua mullins"));
//
// * Return Negative // * Complete
//
const makeNegative = (num) => num > 0 ? num * -1 : num;
//
// * You Only Need One * Complete
//
const check = (a, x) => a.includes(x);
//
// * Find Opposite // * Complete
//
const opposite = (number) => -number;
// console.log(opposite(1));
// console.log(opposite(0));
// console.log(opposite(-12525220.3325));
//
// * Grasshopper - Personalized Greeting // * Complete
//
const greetMe = (name, owner) => name === owner ? "Hello boss" : "Hello guest";
// console.log(greetMe("Kaylee", "Kaylee"));
// console.log(greetMe("Joshua", "Kaylee"));
//
// * Convert Number to Reversed Array of Digits // * Complete
//
function digitize(n) {
    n.toString().split("").reverse();
}
//
// console.log(digitize(12345));

// * For Fun - Spooky Szn // * Complete

function spookyTime(starbucks) {
    if (starbucks.includes("pumpkin spice latte") === true) {
        return "spooky szn";
    } else {
        return false;
    }
}

// console.log(spookyTime("pumpkin spice latte"));

// * Find Average // * Complete

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

// * Count Sheep // * Complete

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

function XO(str) {
    str = str.toUpperCase();
    let strCount = str.length;
    let xCount = strCount - (str.replace(/X/g, '').length);
    let oCount = strCount - (str.replace(/O/g, '').length);
    return xCount === oCount;
}
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

// * Validate Pin // * Complete

// function validatePIN (pin) {
//     let isNum = pin.split('').map(num => !isNaN(num) && !num.includes('.') && num >= 0);
//     let length = pin.length === 4 || pin.length === 6;
//     let edge = !pin.includes('\n');
//     return (!isNum.includes(false) && length && edge);
// }

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// console.log(validatePIN('1234'));
// console.log(validatePIN('heya'));
// console.log(validatePIN('123456'));
// console.log(validatePIN('12345'));
// console.log(validatePIN('-12345'));
// console.log(validatePIN('0.1234'));
// console.log(validatePIN('123\n'));

// * Is it a Triangle? // * Complete

function isTriangle(a,b,c) {
    return (Math.max(a, b, c) < a + b + c - Math.max(a, b, c));
}

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));

// * Sum of Positive // * Complete

// function positiveSum(arr) {
//     // remove negative
//     arr = arr.filter(num => num >= 0);
//     // sum of all remaining
//     let start = 0;
//     return arr.reduce((sum, add) => sum + add, start);
// }

function positiveSum(arr) {
    return arr.filter(num => num >= 0).reduce((sum, add) => sum + add, 0);
}

// const positiveSum = (arr) => arr.filter(num => num >= 0).reduce((sum, add) => sum + add, 0);

// console.log(positiveSum([1,2,3,4,5]),15);
// console.log(positiveSum([1,-2,3,4,5]),13);
// console.log(positiveSum([]),0);
// console.log(positiveSum([-1,-2,-3,-4,-5]),0);
// console.log(positiveSum([-1,2,3,4,-5]),9);

// * Reversed Sequence // * Complete

const reverseSeq = (n) => {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.unshift(i);
    }
    return array;
};

// console.log(reverseSeq(5));

// *

function filter_list(arr) {
    // return arr.filter(num => typeof num !== 'string' && num >= 0);
    // return arr.filter(num => /^(\d)$/ && num >= 0);
    let result = arr.filter(num => [0-9] && num >= 0);
    return result.map(num => num.keys());
    // return "[ " + arr.filter(num => [0-9] && num >= 0) + " ]";
    // return arr.map(num => num.includes(\^(/w)$\);
}

console.log(filter_list([1,2,"aasf","1","123",123]) + " expected [ 1, 2, '1', '123', 123 ]");


