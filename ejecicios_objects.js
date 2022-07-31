// 1- Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

const character = {
    name: "Jon",
    family: "Snow",
    id: 1,
};

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
// console.log(character)

// 5.1- Asegura los cambios solo imprimiendo esa nueva propiedad.
//console.log(character.age)

// 6- Lista el numero de propiedades que contiene el objeto.
keys = Object.keys(character)
console.log('There are ' + keys.length + ' properties')

// 7- Cambia la propiedad name por fullName.

character.Fullname = character.name + " " +  character.family
delete character.name
// console.log(character)

// 8- Lista todas las propiedades del objeto a través de un console.log()

// console.log(`Hi, my name is ${character.Fullname}, i'm ${character.age} years old and my family are the ${character.family}`)

// 9- Añade más propiedades al objeto, como... location, job...

character.location = 'El puertito de Güimar'
character.favArmour = 'Boredomness'
character.hairstyle = 'Curly Hair'

console.log(character)
