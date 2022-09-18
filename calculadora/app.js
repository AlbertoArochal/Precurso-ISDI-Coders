// Creamos las variables necesarias para leer los elementos de nuestro html, asi como para el uso en funciones


const numberPad = document.querySelectorAll('.number__button')
const buttonDecimals = document.querySelector('.button__decimal');
const buttonAC = document.querySelector('.button__AC');
const operatorsPad = document.querySelectorAll('.operation__button')
const buttonPosNeg = document.querySelector('.button__posneg')
const allButtons = document.querySelectorAll('.calculator__button')
let operations = ''
let operators = ''
let current = ''
const buttonEqual = document.getElementById('button__equal')
const calculatorScreen = document.querySelector('.calculator__screen')

// Definimos escuchas de eventos de los elementos del html, e iteramos los que recogen distintos tipos de botones

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operations.length >= 19) {
            alert("Error, number too long");
            operations = ''
        }
    })
})

numberPad.forEach(button => {
    button.addEventListener('click', () => {
        operations += button.textContent.toString();
        console.log(operations);
        calculatorScreen.textContent = operations;
    })
})

buttonPosNeg.addEventListener('click', function () {
    if (operations > 0) {
        operations = -Math.abs(operations)
    } else if (operations < 0) {
        operations = Math.abs(operations);
    } else if (operations === 0 || operations === '') {
        operations = 0
    } else {
        alert('Please end the current operation')
    };
    calculatorScreen.textContent = operations;


})


operatorsPad.forEach(button =>
    button.addEventListener('click', () => {
        {
            if (operators != '') {
                calculations();
                operators = button.textContent.toString();
                operations += button.textContent.toString();
                calculatorScreen.textContent = operations
            }
            
            else {
                operations += button.textContent.toString();
                console.log(operations);
                calculatorScreen.textContent = operations;
                operators = button.textContent.toString()
            }
        }
    }))

buttonDecimals.addEventListener('click', function () {
    operations += buttonDecimals.textContent.toString();
    console.log(operations);
;
    calculatorScreen.textContent = operations
})


buttonAC.addEventListener('click', function () {
    operations = '';
    console.log(operations);
    calculatorScreen.textContent = 0;
    operators = ''
})


buttonEqual.addEventListener('click', function () {
    calculations();
    calculatorScreen.textContent = current;
    operators = '';
})

// Creamos una funcion que realice los distintos calculos y los presente en la pantalla de la calculadora.

const calculations = (num1, num2) => {
    if (operations[0] == "-") {
        operations = operations.slice(1, operations.length);
        let operationsp = operations.split(/[^0-9^.]/);
        num1 = -Math.abs(parseFloat(operationsp[0]));
        num2 = parseFloat(operationsp[1])
    }
    else if (operations[0] != "-") {
        let operationsp = operations.split(/[^0-9^.]/);
        num1 = parseFloat(operationsp[0]);
        num2 = parseFloat(operationsp[1]);
    };
    switch (operators) {
        case "+":
            console.log(num1, num2)
            current = (Number(num1) + Number(num2));
            console.log(current);
            operations = '';
            operators = '';
            operations = current;
            break;
        case "-":
            current = (Number(num1) - Number(num2));
            console.log(current);
            operations = '';
            operators = '';
            operations = current;
            break;
        case "/":
            current = (Number(num1) / Number(num2))
            console.log(current);
            operations = '';
            operators = '';
            operations = current;
            break;
        case '*':
            current = (Number(num1) * Number(num2))
            console.log(current);
            operations = '';
            operators = '';
            operations = current;
            break;
        case '%':
            current = (Number(num1) % Number(num2))
            console.log(current);
            operations = '';
            operators = '';
            operations = current;
            break;
        default:
            current = operationsp
    }
}