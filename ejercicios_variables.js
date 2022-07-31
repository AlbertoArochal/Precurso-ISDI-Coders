// 1- Declara tu nombre y muéstralo por consola utilizando la variable const:

const nombre = 'Alberto'

// 2- Declara tu edad y muéstralo por consola utilizando la variable let:

let edad = 38

// 3- Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola utilizando la variable

let data = ['Alberto', 'Rocha', 38]
console.log(data)

// 4- Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola utilizando la variable const:

const dataob = {name: nombre, age: edad}

console.log(dataob)

// 5- Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.

data.map(elemento => console.log(elemento))

// 6- Crea una estructura condicional que imprima el número mayor entre dos números.

let num1 = 13
let num2 = 29
if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// 6.1- Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

let num1 = 25
let num2 = num1

if (num1 > num2) {
    console.log(num1)
} else if (num1 === num2) {
    console.log("Numbers are equal")
} else {
    console.log(num2)
}

// 7- Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

let arreglo = [23, 45, 6, 78, 9]
for (i = 0; i < arreglo.length; i++ ) { if (i === 2) {console.log(arreglo[i] + ' We are in the middle of the loop')} else {console.log(arreglo[i])}}

// 8- Declara tu nombre y tu edad y luego crea un condicional para que en caso de no coincidir con tus datos, mostrar un error

let nombre = 'Alberto'
let edad = 38

if (nombre != 'Alberto' && edad != 38) {console.log('This is not you')} else {console.log('Great to see again')}

// 8.1- Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

let nombre = 'Alberto'
let edad = 38
arreglodata = [nombre, 'zapato', 'cazurro', 'centolla', 23, 75, 34, 'la carta', edad]

for (element of arreglodata) {
    if (element === 'Alberto') {
        console.log(`Encontre tu nombre que es ${nombre}`)
    } else if (element === 38) {
        console.log(`Encontre tu edad que es ${edad}`)
    }
}
