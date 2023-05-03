const TabladeCumpleaños = document.querySelector('.texto-cumpleaños');


function fecha(Listacompleta) {
    const fechaActual = new Date(); // crea un objeto Date con la fecha y hora actuales
const mesActual = fechaActual.getMonth() + 1; // devuelve el mes actual (0 = enero, 1 = febrero, etc.) y le suma 1 para que el mes esté en el rango de 1 a 12
const diaActual = fechaActual.getDate(); // devuelve el día del mes actual (1-31)
let meses;
//console.log(Listacompleta);
//console.log(`El mes actual es ${mesActual} y el día actual es ${diaActual}`);

switch (mesActual) {
        case 1:
            const Listadeenero = Listacompleta.filter(indice => indice.mesnacimiento == 1);
            meses = 'Enero';
            rendercumpleños(Listadeenero, meses);
        break;
        case 2:
            const Listadefebrero = Listacompleta.filter(indice => indice.mesnacimiento == 2);
            meses = 'Febrero';
            rendercumpleños(Listadefebrero, meses);
        break;
        case 3:
            const Listademarzo = Listacompleta.filter(indice => indice.mesnacimiento == 3);
            meses = 'Marzo';
            rendercumpleños(Listademarzo, meses);
        break;
        case 4:
            const Listadeabril = Listacompleta.filter(indice => indice.mesnacimiento == 4);
            meses = 'Abril'
            rendercumpleños(Listadeabril, meses);
        break;
        case 5:
            const Listademayo = Listacompleta.filter(indice => indice.mesnacimiento == 5);
            meses = 'Mayo';
            rendercumpleños(Listademayo, meses);
        break;
        case 6:
            const Listadejunio = Listacompleta.filter(indice => indice.mesnacimiento == 6);
            meses = 'Junio';
            rendercumpleños(Listadejunio), meses;
        break;
        case 7:
            const Listadejulio = Listacompleta.filter(indice => indice.mesnacimiento == 7);
            meses = 'Julio';
            rendercumpleños(Listadejulio, meses);
        break;
        case 8:
            const Listadeagosto = Listacompleta.filter(indice => indice.mesnacimiento == 8);
            meses = 'Agosto';
            rendercumpleños(Listadeagosto, meses);
        break;
        case 9:
            const Listadeseptiembre = Listacompleta.filter(indice => indice.mesnacimiento == 9);
            meses = 'Septiembre';
            rendercumpleños(Listadeseptiembre, meses);
        break;
        case 10:
            const Listadeoctubre = Listacompleta.filter(indice => indice.mesnacimiento == 10);
            meses = 'Octubre';
            rendercumpleños(Listadeoctubre, meses);
        break;
        case 11:
            const Listadenoviembre = Listacompleta.filter(indice => indice.mesnacimiento == 11);
            meses = 'Noviembre';
            rendercumpleños(Listadenoviembre, meses);
        break;

    default:
        const Listadediciembre = Listacompleta.filter(indice => indice.mesnacimiento == 12);
        meses = 'Diciembre';
        rendercumpleños(Listadediciembre, meses);
        break;
}

}

function cumpleaños() {
const ListaDeEmpleados = [];
ListaDeEmpleados.push({
    nombre: 'Jose Gomez Nuñez',
    mesnacimiento: 3,
    dianacimiento: 1,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Alfonso Marinez Constantino',
    mesnacimiento: 3,
    dianacimiento: 1,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jaqueline Solis Ruíz',
    mesnacimiento: 3,
    dianacimiento: 2,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Rafael Perez Giron',
    mesnacimiento: 3,
    dianacimiento: 12,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Juan Jose Alfaro Moreno',
    mesnacimiento: 3,
    dianacimiento: 14,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Alfonso Marinez Constantino',
    mesnacimiento: 3,
    dianacimiento: 1,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Karina del Rocio Moreno Navarro',
    mesnacimiento: 3,
    dianacimiento: 15,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Mario Bonilla Marquez',
    mesnacimiento: 3,
    dianacimiento: 15,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jose Eliel Baca Gordillo',
    mesnacimiento: 3,
    dianacimiento: 21,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Gladis Adriana Sarmiento Ramirez',
    mesnacimiento: 3,
    dianacimiento: 21,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Juan Gabriel Escobar Dominguez',
    mesnacimiento: 3,
    dianacimiento: 24,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Nadia Iliana Estada Borraz',
    mesnacimiento: 3,
    dianacimiento: 27,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Nashely Molina Ponce',
    mesnacimiento: 4,
    dianacimiento: 4,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Trinidad Dominguez Suarez',
    mesnacimiento: 4,
    dianacimiento: 15,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Erika De Los Angeles Quiroz Villarreal',
    mesnacimiento: 4,
    dianacimiento: 15,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Heydi Gamboa Cruz',
    mesnacimiento: 4,
    dianacimiento: 22,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Rosario Garcia Montoya',
    mesnacimiento: 4,
    dianacimiento: 23,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jorge Luis Santiago Grajales',
    mesnacimiento: 4,
    dianacimiento: 25,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Josue Arguello Alcala',
    mesnacimiento: 4,
    dianacimiento: 30,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Cruz Zuñiga Nandayapa',
    mesnacimiento: 5,
    dianacimiento: 2,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Reiner Fabian Vazquez Zenteno',
    mesnacimiento: 5,
    dianacimiento: 2,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Daniel Alejandro Moreno Anzueto',
    mesnacimiento: 5,
    dianacimiento: 4,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Irving Ivan Prieto Mendiola',
    mesnacimiento: 5,
    dianacimiento: 10,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jorge Alexis Farrera Gonzalez',
    mesnacimiento: 5,
    dianacimiento: 13,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Santa Ana Moreno Lucho',
    mesnacimiento: 5,
    dianacimiento: 13,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Iris del Carmen Lopez Garcia',
    mesnacimiento: 5,
    dianacimiento: 19,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Ruben de Jesus Cruz Gutierrez',
    mesnacimiento: 5,
    dianacimiento: 24,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Claudia Carolina Gomez Lopez',
    mesnacimiento: 5,
    dianacimiento: 24,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Justino Novelo Buenfil',
    mesnacimiento: 6,
    dianacimiento: 11,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Antonio C. Nanguyasmu Alegria',
    mesnacimiento: 6,
    dianacimiento: 13,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Luis Antonio Arroyo Estrada',
    mesnacimiento: 6,
    dianacimiento: 25,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Valeria Camacho Moreno',
    mesnacimiento: 6,
    dianacimiento: 26,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Cordova Jorge',
    mesnacimiento: 7,
    dianacimiento: 2,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Francisco Hernandez Gomez',
    mesnacimiento: 7,
    dianacimiento: 3,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Josue Enoch VillaFuerte Cañas',
    mesnacimiento: 7,
    dianacimiento: 4,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jorge Perez Mendez',
    mesnacimiento: 7,
    dianacimiento: 9,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Tania Itzel Lopez Garcia',
    mesnacimiento: 7,
    dianacimiento: 10,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Amalia Sanchez Serrano',
    mesnacimiento: 7,
    dianacimiento: 10,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Anayeli Perez Hernandez',
    mesnacimiento: 7,
    dianacimiento: 27,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Arnulfo Ocaña Cruz',
    mesnacimiento: 7,
    dianacimiento: 18,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jorge Alberto Velazquez Cruz',
    mesnacimiento: 7,
    dianacimiento: 23,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Ada Elisa Fuentes Lopez',
    mesnacimiento: 7,
    dianacimiento: 24,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Alondra Moreno Anzueto',
    mesnacimiento: 7,
    dianacimiento: 27,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Elizabeth del Carmen Mendez Vilchis',
    mesnacimiento: 7,
    dianacimiento: 29,
    imagen:'',
});
ListaDeEmpleados.push({
    nombre: 'Jorge Alberto Culebro Vera',
    mesnacimiento: 7,
    dianacimiento: 30,
    imagen:'',
});
//console.log(ListaDeEmpleados[9].dianacimiento);
return ListaDeEmpleados;
}

function rendercumpleños(arr, meses) {
    arreglo = arr;
    console.log(arreglo)
    const tabla = document.createElement('table'); // creamos una nueva tabla
    tabla.classList.add('styled-table-incio');
    // agregamos una fila a la tabla
const fila1 = tabla.insertRow();
// agregamos dos celdas a la fila
const celda1 = fila1.insertCell();
const celda2 = fila1.insertCell();
// agregamos texto a las celdas
celda1.innerHTML = '<h1>Cumpleañeros de '+ meses + ' 🥹🥳🎉</h1>';
celda2.innerHTML = '<h1>Dia</h1>';

for (Listadelmes of arreglo) { // si usara  for (Listadelmes in arreglo) esto mostraria el indice del arreglo en caso de of muestra el elemento que del arreglo
       
// agregamos otra fila a la tabla
const fila2 = tabla.insertRow();
// agregamos dos celdas a la fila
const celda3 = fila2.insertCell();
const celda4 = fila2.insertCell();
// agregamos texto a las celdas
celda3.innerHTML = '<p>'+ Listadelmes.nombre +'</p>';
celda4.innerHTML = '<p>'+ Listadelmes.dianacimiento +'</p>';
}
// agregamos la tabla al contenedor
TabladeCumpleaños.appendChild(tabla);
}
fecha(cumpleaños());
