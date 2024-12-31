// volume of a cuboid
// let volume = (length, width, height) => {
//     return length * width * height
// }
// console.log(volume(2,3,5));

// Formatting decimal places
// function twoDecimalPlaces(n) {
//     return Number(n.toFixed(2))
// }
// console.log(twoDecimalPlaces(1));

// Dollars and Cents
// let dollersCents = (d) => `$${d.toFixed(2)}`
// console.log(dollersCents(1));

// Find the position!
// function position(letter){
//     let alpha = "abcdefghijklmnopqrstuvwxyz"
//     return `Position of alphabet:${alpha.indexOf(letter) + 1}`
// }
// console.log( position("c"));

// Opposites Attract
// function lovefunc(f1, f2){
//     if (f1 % 2 === 0 && f2 % 2 !== 0 || f2 % 2 === 0 && f1 % 2 !== 0 ) {
//         return true
//     } else{
//         return false
//     }
// }
// let lovefunc = (f1,f2) => f1 % 2 === 0 && f2 % 2 !== 0 || f2 % 2 === 0 && f1 % 2 !== 0 ? true : false
// console.log(lovefunc(2,4))

// No zeros for heros
// function noBoringZeros(n) {
//     let tostring = String(n)
//     while(tostring.lastIndexOf(0) === tostring.length - 1){
//         tostring = tostring.slice(0,-1)
//     }
//     return Number(tostring)
//   }
// console.log(noBoringZeros(9222000000));

// Get the mean of an array
// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     let count = 0
//     for(let i = 0 ; i < marks.length ; i++){
//         count += marks[i]
//     }
//     return Math.floor(count / marks.length)
// }
// let average = (marks) => Math.floor(marks.reduce((a,b) => a + b ) / marks.length)
// console.log(average([1,2,3,10]));

// Friend or Foe?
// function friend(friends){
//     return friends.filter((friend)=> friend.length === 4)
// }
// console.log(friend(["mooo", "ji", "dooo" , "aa"]));

// Vowel remover
// let shortcut = (s) => {
//     let vowel = ["a", "A", "o", "O", "e", "E", "u", "U", "i", "I"]
//     let result = []
//     for (let i = 0; i < s.length; i++) {
//         if(!vowel.includes(s[i])){
//             result.push(s[i])
//         }
//     }
//     return result.join('')
// }
// const shortcut = (s) => s.replace(/[aouie]/g, '')
// console.log(shortcut("himeno"));

// removeExclamationMarks
// const removeExclamationMarks = (s) => s.replace(/[!]/g,'')
// console.log(removeExclamationMarks("hello!ss!"));

// Reversed Strings
// const solution = (s) => s.split('').reverse().join('')
// console.log(solution("hii"));

// Beginner - Reduce but Grow
// const grow = (arr) => arr.reduce((a,b)=> a * b)
// console.log(grow([1,2,3,4]));

// Is it a palindrome?
// const isPalindrome = (s) => {
//     return s.toLowerCase() == s.toLowerCase().split('').reverse().join('')
// }
// console.log(isPalindrome("Aba"));

// Are they the "same"?
// function comp(a, b){
//     if(!a || !b) return false
//     if (a.length !== b.length) return false
//     squerdA = a.map((a) => a * a ).sort((x,y)=> x - y)
//     b.sort((x,y)=> x - y)
//     return squerdA.every((value, index) => value === b[index])
// }

// console.log(comp(null,[4,9,16]));

// age details
// const ageDetails = (n) => {
//     const years = n / 365
//     const year = Math.floor(years)
//     const arr = years.toString().split('')
//     const index = arr.indexOf('.')
//     const day = Number(arr.slice(index).join('')) * 365
//     const monthes =Math.floor( day / 30)
//     const days = Math.round(day % 30)
//     return `${year} years ${monthes} monthes ${days} days `
//   }
//   console.log(ageDetails(400));

// FIXME: Replace all dots
var replaceDots = function (str) {
  return str.replace(/./g, "-");
};
console.log(replaceDots("hi."));
