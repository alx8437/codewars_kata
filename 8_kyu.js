//Total amount of points
const points = (games) => {
    const getScore = (str, position) => {
        if (position === 'x') return Number(str.slice(0, 1))
        if (position === 'y') return Number(str.slice(2, 3))
    }


    let result = 0;

    for (let i = 0; i < games.length; i++) {
        const game = games[i]
        console.log(game)
        const x = getScore(game, 'x');
        const y = getScore(game, 'y');
        if (x > y) {
            result += 3
        } else if (x === y) {
            result += 1
        }
    }

    return result;
}

// Do I get a bonus?
function bonusTime(salary, bonus) {
   return bonus ? `\u00A3${salary*10}` : `\u00A3${salary}`
}


// Convert a string to an array
const stringToArray = (string) => {
    return string.split(' ')
}

// Counting sheep...
function countSheep(sheep) {
    let result = 0;

    for (let i = 0; i < sheep.length; i++ ) {
        if (sheep[i]) {
            result += 1;
        }
    }

    return result;
}

// Removing Elements
function removeEveryOther(arr){
    const result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result
}

// Contamination #1 -String-
// function contamination(text, char){
//     if (text === '' || char === '') {
//         return ''
//     }
//
//     let result = ''
//
//     for (let i = 0; i < text.length; i++) {
//         result += char
//     }
//
//     return result
// }

function contamination(text, char){
    return char.repeat(text.length)
}

// Formatting decimal places #0
function twoDecimalPlaces(n) {
    return Number(n.toFixed(2))
}

// Beginner - Reduce but Grow
function grow(x) {
    let multiply = 1

    for (let i = 0; i < x.length; i++) {
        multiply *= x[i]
    }

    return multiply;
}

// Find Maximum and Minimum Values of a List
const min = function(list){
    let result = list[0];

    for(let i = 0; i < list.length; i += 1) {
        if (list[i] < result) {
            result = list[i]
        }
    }

    return result;
}

const max = function(list){
    let result = list[0];

    for(let i = 0; i < list.length; i += 1) {
        if (list[i] > result) {
            result = list[i]
        }
    }

    return result;
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    const startSymbol = name.toLowerCase()[0]

    if (startSymbol === 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}

// Replace all dots

const replaceDots = (str) => {
    return str.replace(/\./g, '-');
}

// Grasshopper - Debug sayHello
function sayHello(name) {
    return 'Hello, ' + name
}

// Switch it Up!
function switchItUp(number){
	switch(number){
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Zero';
    }
}

// Add new item (collections are passed by reference)
function addExtra( listOfNumbers ){

    return [...listOfNumbers, 13]
}

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    const sumClassPoints = classPoints.reduce((acc, num) => {
        return acc + num
    }, 0)

    const averageClassPoints = sumClassPoints / classPoints.length

    return yourPoints > averageClassPoints
}

// Simple calculator
function calculator(a,b,sign) {
    if (typeof a !== "number" || typeof b !== "number"){
        return 'unknown value'
    }

    switch (sign) {
        case '+': {
            return a + b
        }

        case '-': {
            return a - b
        }

        case '/': {
            return a / b
        }

        case '*': {
            return a * b
        }

        default: 'unknown value'
    }
}

// Even or Odd numbers

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// Regular Ball Super Ball
const Ball = function(ballType) {
    this.ballType = ballType || 'regular'
};

//Remove First and Last Character
const removeChar = (str) => {
    return str.length <= 2 ? '' : str.slice(1, -1);
}

// isReallyNaN
const isReallyNaN = (val) => {
    // return isNaN(val);  // wasn't working as planned :-(
    return val !== val
};

// 5 without numbers !!
function unusualFive() {
    return 'qwert'.length
}

// Calculate average
const findAverage = (array) => {
    if (array.length === 0) {
        return 0
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    const result = sum / array.length;

    return result;
}

// Reversed Words
const reverseWords = (str) => {
    const arrFromString = str.split(' ');

    let reverseArr = [];
    for (let i = arrFromString.length - 1; i >= 0; i--) {
        reverseArr.push(arrFromString[i])
    }

    return reverseArr.join(' ');
}

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : l * 2 + w * 2
};

function whoIsPaying(name){
    if (name.length <= 2) return [name]
    return [name, name.substring(0, 2)]
}

// Convert number to reversed array of digits
function digitize(n) {
    const digits = n.toString().split('').map(Number);
    return digits.reverse();
}

// Remove First and Last Character Part Two
function array(string) {
    const arrayFromString = string.split(',');
    if (arrayFromString.length < 3) return null

    return arrayFromString.slice(1, -1).join(' ');
}

// Ensure question
function ensureQuestion(str) {
    return str.endsWith('?') ? str : str.concat('?')
}

// Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const remainingBlue = blueStart - bluePulled;
    const remainingRed = redStart - redPulled;
    const totalRemaining = remainingBlue + remainingRed;

    return remainingBlue / totalRemaining;
}

// Merging sorted integer arrays (without duplicates)
function mergeArrays(a, b) {
    const merge = [...a, ...b];
    const sortedArray = merge.sort((a, b) => a - b);
    const uniqueArray = [...new Set(sortedArray)];

    return uniqueArray
}

// Who ate the cookie?
function cookie(x){
    const phrase = 'Who ate the last cookie? It was '
    return typeof x === "string" ? phrase + 'Zach!' : typeof x === 'number' ? phrase + 'Monica!' : phrase + 'the dog!'
}

// Grasshopper - Summation
const summation = function (num) {
    let result = 0
    for (let i = 1; i <= num; i++) {
        result += i
    }

    return result
}

// toAlternatingCase
String.prototype.toAlternatingCase = function() {
    return this.split('')
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join('');
};

// Never visit
function SubtractAndSum(n) {
    return "apple";
}

// Semi-Optional
function wrap(value) {
    return {value: value};
}

// Simple multiplication
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    }

    return number * 9
}

// Hex to Decimal
function hexToDec(hexString){
    return parseInt(hexString, 16)
}

// Remove the time
function shortenToDate(longDate) {
    return longDate.split(",")[0]
}

// Parse nice int from char problem
function getAge(inputString){
    const age = Number(inputString[0])
    return age;
}

// Grasshopper - Basic Function Fixer
function addFive(num) {
    return num + 5
}

// The 'if' function
function _if(bool, func1, func2) {
    if (bool) {
        func1()
        return
    }
    func2()
}

// Is it a palindrome?
const isPalindrome = (str) => {
    const reversStr = str.split('').reverse().join('');
    return reversStr.toUpperCase() === str.toUpperCase();
}

// Is this plural?
function plural(n) {
    if (n === 1) {
        return false
    }
    return true
}






