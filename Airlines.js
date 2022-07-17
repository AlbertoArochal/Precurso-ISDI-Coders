// Establecemos el array de objetos flights con los vuelos sugeridos en el ejercicio.
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
    },
];
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