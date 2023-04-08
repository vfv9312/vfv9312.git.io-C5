const menuMovil = document.querySelector('.menu11'); // menuMovil es una constante que le damos el valor de la clase css de .menu11 que es nuestra imagen como iconito de tres lineas
const vermenu = document.querySelector('.mobile-menu'); // vermenu es una constante con el valor del html que esta en la clase .mobile-menu
const botonsalir = document.querySelector('.sign-out')


menuMovil.addEventListener('click', statusinactivo); // escuchamos el evento click del ..menu1 osea del cuando le den click al icono y entramos a la funcion
botonsalir.addEventListener('click', cerrarsesion)

function statusinactivo() { // entramos a la funcion y le dieron click
    vermenu.classList.toggle('inactivo'); //toggle lo que hace esque quita o pone la clase inactivo cada que entre la funcion por lo que el css se quita y se pone
}

function sesion() {
    if(!sessionStorage.getItem('Usuario')){
        window.location.href = 'index.html';
        alert('Credenciales inválidas. Intente de nuevo.');

    }
    else{
        console.log('todo bien');
    }
}
sesion();

function cerrarsesion(params) {
    sessionStorage.removeItem('Usuario');
    window.location.href = 'index.html';
    alert('Gracias, por entrar.');
}