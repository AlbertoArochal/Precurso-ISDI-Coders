// Creamos la función calculator que admite dos números, que deberán ser rellenados por el usuario mediante prompt.

function calculator(num1, num2) {
    num1 = Number(prompt('introduce number')); num2 = Number(prompt('introduce another number'));
    // Si no se rellena el segundo argumento la funcion saca automaticamente la raiz cuadrada
    if (num2 === false | num2 === 0) { let squareroot = Math.sqrt(num1); console.log("Square Root = " + squareroot.toFixed(3)) }
    // Si  los valores de cualquiera de los dos argumentos son nulos, se muestra mensaje de error personalizado.
    else if (isNaN(num1) === true | isNaN(num2) === true) {
        console.log('Your input is not valid. would you please introduce only numerical values?')
    }
    // Si todo está correcto se realizan las operaciones, guardando los resultados en variables, y se muestran por pantalla.
    else {
        let sum = num1 + num2;
        let subs = num1 - num2;
        let mult = num1 * num2;
        let div = num1 / num2;
        return console.log(["Addition: " + sum.toFixed(3), 'Substraction: ' + subs.toFixed(3), "Multiplication: " + mult.toFixed(3), "Division: " + div.toFixed(3)])

    }
}








