// Convert an array of strings to array of numbers
function toNumberArray(stringarray){
    return stringarray.map(item => Number(item))
}

// Find the capitals
const capitals = function (word) {
    const arrayFromString = word.split('')
    return arrayFromString
};

console.log(capitals('CodEWaRs'))
