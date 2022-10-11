// function highAndLow(numbers) {
//     numbers = numbers.split(" ");
//     return Math.max(...numbers) + " " + Math.min(...numbers);
// }
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
function findNeedle(haystack) {
    let position = haystack.indexOf("needle");
    return "Needle found at position " + position;
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
