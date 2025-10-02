// Convert an array of strings to array of numbers
function toNumberArray(stringarray){
    return stringarray.map(item => Number(item))
}

// Find the capitals
const capitals = function (word) {
    const arrayFromString = word.split('')
    return arrayFromString
};

// Sum of all arguments
function sum(...args) {
    let result = 0;

    for(let arg of args) {
        result += arg
    }

    return result
}

// Find Your Villain Name
function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    const date = birthday.getDate() % 10;
    const month = birthday.getMonth();

    return `The ${m[month]} ${d[date]}`
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b);

    return sorted[0] + sorted[1];
}

function factorial(n) {
    if (n < 0 || n >= 12) {
        throw new RangeError('Input must be between 0 and 12')
    }

    if (n === 0) return 1

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i
    }

    return result
}

// Find the anonymous function
function FindFunction(funcArr, arr) {
    const func = funcArr.find(item => typeof item === 'function');

    return arr.filter(func)
}






