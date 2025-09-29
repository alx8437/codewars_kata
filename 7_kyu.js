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




