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
function contamination(text, char){
    if (text === '' || char === '') {
        return ''
    }

    let result = ''

    for (let i = 0; i < text.length; i++) {
        result += char
    }

    return result
}

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

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);
//
// var min = function(list){
//     list.sort((a, b) => (a - b));
//     return list[0];
// }
//
// var max = function(list){
//     list.sort((a, b) => (b - a));
//     return list[0];
// }

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


console.log(replaceDots("one.two.three"))