
const botonentrar = document.querySelector('#boton_entrar');
const botonolvido = document.querySelector('#Olvido');

botonentrar.addEventListener('click', entrar);


function entrar() {

    const usuario = document.getElementById('usuario').value;
     const contraseña = document.getElementById('password').value;
    if (usuario == "Operador" && contraseña == "despacho") {
        window.location.href = "inicio.html";
        sessionStorage.setItem('Usuario', usuario);
    }
    else {
        alert('La contraseña o usuario es incorrecta');
    }
}
botonolvido.addEventListener('click', mensaje);
function mensaje() {
    alert(' comunicarse via correo electronico enlace enlacecalidad911tgz@gmail.com')
}

