// Creamos una variable de alcance global donde guardaremos los resultados de las distintas iteracciones de nuestra calculadora
let result = []
// creamos la funcion principal con un unico argumento args, que admite multiples numeros separados por comas mediante la funcion prompt

function calculatorPro(args) {
    args = prompt('add numbers, comma separated');
    args = args.split(',');
    if (args.length === 1) {
        if (isNaN(Number(args[0])) === true) {
            console.log('Please introduce only numerical values') // Si solo se introduce un elemento y no es un numero se arroja un error
        } else {
            let squareRoot = Math.sqrt(Number(args[0]));
            return console.log('Square Root = ' + squareRoot.toFixed(3)) // Si es un solo elemento pero si es un numero se muestra su raiz cuadrada
        }
    } else { // si son varios numeros se realizan todas las operaciones con bucles for y se guardan los resultados en distintas variables locales
        let add = 0;
        for (i = 0; i < args.length; i++) {
            add += Number(args[i])
        };
        let subs = args[0];
        for (j = 0; j < args.length; j++) {
            subs -= Number(args[j])
        };
        let mult = args[0];
        for (k = 1; k < args.length; k++) {
            mult *= Number(args[k])
        };
        let div = args[0];
        for (l = 1; l < args.length; l++) {
            div /= Number(args[l])
        };
        if (isNaN(Number(add)) | isNaN(subs) | isNaN(mult) | isNaN(div) === true) { // se vuelve a comprobar si se ha introducido algun elemento no numerico
            console.log('Please introduce only numerical values')
        } else {
            result.push('Addition: ' + add.toFixed(3), "Substraction: " + subs.toFixed(3), "Multiplication: " + mult.toFixed(3), "Division: " + div.toFixed(3));
            console.log(result); // Si todo es correcto se añaden todas las variables con tres decimales a la variable global result, con la denominación de cada resultado.
            let answer = prompt('Do you want to continue? y/n'); // Usamos switch case para volver a consultar al usuario si quiere realizar mas operaciones.
            switch (answer) {
                case 'y':
                    return calculatorPro(); // Si el usuario contesta que afirmativamente se vuelve a ejecutar la funcion principal.
                case 'n':
                    return console.log('... ok then, bye')
            }
        }
    }
}


