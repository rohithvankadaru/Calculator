const inputTag = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
let string = "";

//main code, adding event listener for buttons in calculator
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerText == '=') {
            string = eval(string);        //eval() evaluates the input
            inputTag.value = string;
        }
        else if (event.target.innerText == 'AC') {
            string = ""
            inputTag.value = string;
        }
        else {
            string = string + event.target.innerText;
            inputTag.value = string;
        }
    })
});


//  allowing only valid input
inputTag.addEventListener('input', (event) => {
    const input = inputTag.value;
    const lastChar = input.slice(-1);
    const lastSecondChar = input.slice(-2, -1);

    const validChars = /^[0-9*\/+\-.]$/; // Allow numbers, +, -, *, /, and decimal point

    if (!validChars.test(lastChar)) {
        inputTag.value = input.slice(0, -1); // Remove the last character
    }
    else if (!Number.isInteger(Number(lastChar)) && (lastSecondChar === '/' || lastSecondChar === '*' || lastSecondChar === '+' || lastSecondChar === '-')) {
        inputTag.value = input.slice(0, -1); // Remove the last character if the previous one is an operator
    }

    if (validChars.test(lastChar)) {
        document.querySelector(`.${map.get(lastChar)}`).click();
    }
});

document.addEventListener('keypress', event => {
    console.log(event.key);
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('.equal-to').click();
    }
});

const map = new Map();
map.set('1', 'one');
map.set('2', 'two');
map.set('3', 'three');
map.set('4', 'four');
map.set('5', 'five');
map.set('6', 'six');
map.set('7', 'seven');
map.set('8', 'eight');
map.set('9', 'nine');
map.set('10', 'ten');
map.set('+', 'plus');
map.set('-', 'minus');
map.set('*', 'multiply');
map.set('/', 'divide');
map.set('.', 'dot');