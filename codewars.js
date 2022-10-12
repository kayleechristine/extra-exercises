// * High and Low *
//
// function highAndLow(numbers) {
//     numbers = numbers.split(" ");
//     return Math.max(...numbers) + " " + Math.min(...numbers);
// }
//
// * Get the Middle Character *
//
// function getMiddle(s) {
//     let length = s.length;
//     let halfway = length / 2;
//     const oddOrEven = (length) => length % 2 === 0;
//     if (oddOrEven(length) === true) {
//         // middle two
//         return s.substring(halfway - 1, halfway + 1);
//     } else {
//         // middle one
//         return s.substring(halfway, halfway + 1);
//     }
// }
// console.log(getMiddle("ccdcc"));
// console.log(getMiddle("aaabbaaa"));
//
// * A Needle in the Haystack *
//
// function findNeedle(haystack) {
//     let position = haystack.indexOf("needle");
//     return "Needle found at position " + position;
// }
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
//
// * Abbreviate a Two Word Name *
//
// function abbrevName(name){
//     let space = name.indexOf(" ");
//     return (name.substring(0, 1) + "." + (name.substring(space+1, space+2))).toUpperCase();
// }
// console.log(abbrevName("kaylee morris"));
// console.log(abbrevName("joshua mullins"));
//
// * Return Negative *
//
// const makeNegative = (num) => num > 0 ? num * -1 : num;
//
// * You Only Need One *
//
// const check = (a, x) => a.includes(x);
//
// * Find Opposite *
//
const opposite = (number) => -number;
console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(-12525220.3325));