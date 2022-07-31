const name = "Alberto";

function myName() {
    return "My Name has " + name.length + " letters";
}
const result = myName();
console.log(result)

const nombre = 'Alberto Rocha'

function myName() {
    for (i = 0; nombre.length; i++) {
        if (nombre[i] === ' ') {
            return "my surname starts at position " + (i + 2)
        }
    }
}

result = myName()
console.log(result)

const nombre = 'Alberto Rocha'

function myName() {
    for (i = 0; name.length; i++) {
        if (nombre[i] === ' ') {
            return nombre.slice(0, i)
        }
    }
}

result = myName()
console.log(result)

const nombre = 'Alberto Rocha'

function myName() {
    for (i = 0; name.length; i++) {
        if (nombre[i] === ' ') {
            return nombre.slice(i + 1)
        }
    }
}

result = myName()
console.log(result)

const nombre = 'Alberto Rocha'

function myName() {
    for (i = 0; name.length; i++) {
        if (nombre[i] === ' ') {
            let n1 = nombre.slice(0, i);
            let n2 = nombre.slice(i + 1);
            return n1[0] + '.' + n2[0]

        }
    }
}
iniciales = myName()
console.log(iniciales)

const nombre = 'Alberto Rocha'

function myName() {
    var resultado = [];
    for (i = 0; i < nombre.length; i++) {
        resultado.push(nombre[i] + (i + 1) + 'º')
    }
}


console.log(resultado)

const nombre = 'Alberto Rocha'
var resultado

function myName() {
    resultado = [];
    for (i = 0; i < nombre.length; i++) {
        resultado.push(nombre[i] + (i + 1) + 'º');
    }
    console.log(resultado)
}

myName()


const nombre = 'Alberto Rocha'
var nObject = {}

function contaletras(nombre) {
    for (let element of nombre.ToLowerCase()) {
        if (Object.keys(nObject).includes(element) != true) {
            nObject[element] = 1
        } else {
            nObject[element] += 1
        }
    }
    for (let key of nObject.keys) {
        if (nObject[key] === 1 === true) {
            resultado.push(key)
        }
    }
}

var resultado = contaletras(nombre)
console.log(resultado)


const nombre = 'Alberto Rocha'
var nObject = {}

function contaletras(nombre) {
    let arreglo = nombre.filter(function (nombre) {
        return !arreglo.includes(nombre)
    });
    return arreglo

}






nuevoarreglo = contaletras(nombre)

const nombre = 'Alberto Rocha'

function contaletras(nombre) {
    let resultado = {}
    nombre = nombre.toLowerCase().split('').map(function (elemento) {
        if (elemento in resultado === false) {
            resultado[elemento] = 1
        } else {
            resultado[elemento] += 1
        }
    });
    return resultado
}



nuevoarray = contaletras(nombre)
console.log(nuevoarray)

var nombre = 'Alberto Rocha'
nombre = nombre.map(function (elemento) {
    return elemento
})
console.log(nombre)

var babypochito = {
    nombre: 'Babypochito',
    apellido: 'Sucnor',
    estudio: function (materia) {
        console.log('estudiando ' + materia)
    }
}

babypochito.estudio('Algebra')


let objeto1 = {
    nombre: 'pepe',
    apellido: 'Rivera',
    edad: 50,
    permisos: false
}
let objeto2 = {
    ...objeto1,
    permisos: true
}
let objeto3 = Object.assign(objeto2, {
    nombre: 'Felipe',
    apellido: 'Minones',
    edad: 65
})

console.log(objeto1, objeto2, objeto3)

function operaciones(num1, num2) {
    this.suma = num1 + num2;
    this.resta = num1 - num2;
    this.division = num1 / num2;
    this.multiplicacion = num1 * num2;
}

let objeto = new operaciones(23, 4)
console.log(objeto)

const character = {
    name: "Jon",
    family: "Snow",
    id: 1,
};


// 1- Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

function listakeys(objeto) {
    let resultado = Object.keys(objeto);
    console.log(...resultado)
}
// listakeys(character)

// 2- Ahora, crea una función que liste solo los valores de las propiedades.

function listavalues(objeto) {
    let resultado = Object.values(objeto);
    console.log(...resultado)
}
// listavalues(character)

// 3- Cambia el valor de la propiedad family por "Lannister" y asegurate de que los cambios se han efectuado.

character.family = 'Lannister'

// listavalues(character)

// 4- Ahora, elimina la propiedad ID y asegura los cambios.

delete character.id

// listakeys(character)

// 5- Añade una nueva propiedad, por ejemplo age y dale un valor.

character.age = 27
console.log(character)