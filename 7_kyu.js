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

// You Can't Code Under Pressure #2
function Counter() {
    let count = 0;

    this.check = function() {
        return count;
    };

    this.increment = function() {
        count++;
    };
}

// Pizza Payments
function michaelPays(costs) {
    function michaelPays(costs) {
        let michaelPays = 0;

        if (costs < 5) {
            // Michael invites Kate if pizza is less than €5
            michaelPays = costs;
        } else {
            // Kate contributes 1/3 of the price, but no more than €10
            let kateContribution = costs / 3;
            if (kateContribution > 10) {
                kateContribution = 10;
            }
            // Michael pays the rest
            michaelPays = costs - kateContribution;
        }

        // Return with two decimal places
        return Number(michaelPays.toFixed(2));
    }
}

// Fruit string calculator
function calculate(string) {
    // Разбиваем текст на слова
    const words = string.split(' ');

    // Ищем числа и оператор
    const numbers = [];
    let operator = null;

    for (const word of words) {
        // Проверяем, является ли слово числом
        if (/^\d+$/.test(word)) {
            numbers.push(parseInt(word));
        }
        // Проверяем, является ли слово оператором
        else if (word === 'gains' || word === 'loses') {
            operator = word;
        }
    }

    // Выполняем вычисление
    if (operator === 'gains') {
        return numbers[0] + numbers[1];
    } else { // 'loses'
        return numbers[0] - numbers[1];
    }
}

// Valid Parentheses
function validParentheses(parenStr) {
    const stack = [];

    for (let char of parenStr) {
        if (char === '(') {
            stack.push(char);
        }
        if (char === ')') {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }

    return stack.length > 0 ? false : true
}






