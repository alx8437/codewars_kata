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


