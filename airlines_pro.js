const flights = [{
        id: 00,
        to: "New York",
        from: "Barcelona",
        cost: 700,
        scale: false
    },
    {
        id: 01,
        to: "Los Angeles",
        from: "Madrid",
        cost: 1100,
        scale: true
    },
    {
        id: 02,
        to: "Paris",
        from: "Barcelona",
        cost: 210,
        scale: false
    },
    {
        id: 03,
        to: "Roma",
        from: "Barcelona",
        cost: 150,
        scale: false
    },
    {
        id: 04,
        to: "London",
        from: "Madrid",
        cost: 200,
        scale: false
    },
    {
        id: 05,
        to: "Madrid",
        from: "Barcelona",
        cost: 90,
        scale: false
    },
    {
        id: 06,
        to: "Tokyo",
        from: "Madrid",
        cost: 1500,
        scale: true
    },
    {
        id: 07,
        to: "Shangai",
        from: "Barcelona",
        cost: 800,
        scale: true
    },
    {
        id: 08,
        to: "Sydney",
        from: "Barcelona",
        cost: 150,
        scale: true
    },
    {
        id: 09,
        to: "Tel-Aviv",
        from: "Madrid",
        cost: 150,
        scale: false
    }
];


var user = {}
var admin = {}

// Creamos la funcion airlines, con el atributo user que será rellenado mediante prompt.
function airline(user) {
    user = prompt('Dear passenger, please introduce your name: ');
    console.log(`Dear ${user}, these are the flights scheduled for today: `); // Damos la bienvenida.
    var costs = []; // Creamos el array vacio costs donde se almacenaran los costes para sacar el precio medio mas tarde.
    scalecount = 0; // Creamos un contador para los vuelos con escala.
    var lastFlights = flights.slice(5); // Creamos una nueva variable con un slice de los ultimos cinco vuelos.
    for (flight of flights) {
        var scales; // Creamos la variable scales, que entregara un texto u otro en nuestro bucle for segun si el vuelo tiene o no escala.
        if (flight.scale === true) {
            scalecount += 1;
            scales = "at least one scale"
        } else {
            scales = "no scales."
        };
        console.log(`The flight ${flight.id}, from ${flight.from} to ${flight.to} have a cost of ${flight.cost} euros, with ` + scales); // Imprimimos la informacion de forma amigable, usando los atributos de cada objeto.
        costs.push(flight.cost)
    };
    let avgcost = costs.reduce((a, b) => a + b, 0) / costs.length; // Calculamos el precio medio de los vuelos.
    console.log(`The average cost of today flight is ${avgcost} euros, and there are ${scalecount} flights with scales`); // Presentamos por pantalla el precio medio, numero de vuelos con escala, y los ultimos cinco vuelos del dia.
    console.log(`The last 5 destinys for today are: `);
    for (destiny of lastFlights) { // Por cada vuelo de la variable lastFlights, imprimimos el destino del vuelo.
        console.log(destiny.to)
    }
}

//funcion para crear usuarios.

function userCreator(creator) {
    creator = prompt('Are you a 1. User, 2. Admin?, 3. quit?: ');
    switch (creator) {
        case '1':
            user = {
                searchByPrice: searchByPrice
            }
            selectorUser()
            break;
        case '2':
            admin = {
                addFlight: addFlight,
                delFlight: delFlight,
            }
            selector();
            break;
        case '3':
            console.log("Thank you, have a nice day")
            return
        default:
            alert("The option introduced is no valid, you're being returned to the previous screen")
            userCreator()
    }
}

// Selector de acciones para usario de tipo User.

function selectorUser(choice) {
    choice = prompt('Dear user, select an option: 1. Search for a flight 2. Quit');
    switch (choice) {
        case '1':
            user.searchByPrice()
        case '2':
            alert("Have a nice day")
            return
        default:
            alert("The option introduced is no valid, you're being returned to the previous screen")
            selectorUser()
    }
}

// Funcion de user para buscar por precio.

function searchByPrice(budget) {
    budget = parseInt(prompt('Introduce your budget: '));
    var flightslist = [];
    for (i = 0; i < flights.length; i++) {
        if (budget >= flights[i].cost) {
            flightslist.push(`The flight with id: ${flights[i].id}, departs from ${flights[i].from} to ${flights[i].to} and have a cost of ${flights[i].cost} euros`);
        }
    };
    console.log('These are the flights we can offer acording your budget');
    for (let j = 0; j < flightslist.length; j++) {
        console.log(flightslist[j])
    };
    let secondChoice = prompt('Do you want to 1. Quit or 2. Return: ');
    switch (secondChoice) {
        case '2':
            selectorUser()
            break;
        case '1':
            console.log('Have a nice day');
            return
        default:
            alert("The option introduced is no valid, you're being returned to the previous screen")
            searchByPrice()
    }
}

// Funcion selectora de acciones para usuario Admin.

function selector(choice) {
    choice = prompt('Do your want to 1. Schedule Flight, 2. Delete flight, 3 Quit');
    switch (choice) {
        case '1':
            if (flights.length < 15) {
                admin.addFlight()
            } else {
                alert('Sorry, you have reach de maximum number of flights today. Please, select another option');
                return selector()
            }
            break;
        case '2':
            admin.delFlight()
            break;
        case '3':
            return
        default:
            alert("The option introduced is no valid, you're being returned to the previous screen")
            selector()
    }
}

// Funcion para añadir vuelos.

function addFlight(id, to, from, cost, scale) {
    id = prompt('Introduce the new flight ID:');
    to = prompt('Introduce new destiny:');
    from = prompt('Introduce new origin:');
    cost = prompt('Introduce the cost in euros:');
    scale = prompt('Do the new flight have any scales? y/n:');
    switch (scale) {
        case 'y':
            var newFlight = {
                id: id,
                to: to,
                from: from,
                cost: cost,
                scale: true
            }
            flights.push(newFlight)
            console.log(`You've succesfully scheduled the flight ID ${newFlight.id}, from ${newFlight.from} to ${newFlight.to}`)
            break
        case 'n':
            newFlight = {
                id: id,
                to: to,
                from: from,
                cost: cost,
                scale: false
            }
            flights.push(newFlight)
            console.log(`You've succesfully scheduled the flight ID ${newFlight.id}, from ${newFlight.from} to ${newFlight.to}`)
            break
    }
    let addAnother = prompt('Do you want to quit? y/n');
    switch (addAnother) {
        case 'n':
            addFlight();
        case 'y':
            console.log('Have a nice day')
    }
}

// Funcion para borrar vuelos

function delFlight(id) {
    id = Number(prompt('Introduce the id of the flight you want to delete: '));
    for (let i = 0; i < flights.length; i++) {
        if (id === flights[i].id) {
            alert(`The flight with ID ${flights[i].id} from ${flights[i].from} to ${flights[i].to} has been deleted`);
            flights.pop(flights[i])
        };

    }
}

airline()
userCreator()