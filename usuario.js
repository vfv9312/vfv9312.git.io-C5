
const botonentrar = document.querySelector('#boton_entrar');
const botonolvido = document.querySelector('#Olvido');

botonentrar.addEventListener('click', entrar);


function entrar() {

    const usuario = document.getElementById('usuario').value;
     const contraseña = document.getElementById('password').value;
    if (usuario == "CALLE911TGZ" && contraseña == "tuxtla") {
        window.location.href = "inicio.html";
        sessionStorage.setItem('Usuario', usuario);
    }
    else if (usuario == "Admin" && contraseña == "editar") {
        window.location.href = "editor.html";
       // sessionStorage.setItem('Admin', editor);
    }
    else {
        alert('La contraseña o usuario es incorrecta');
    }
}
botonolvido.addEventListener('click', mensaje);
function mensaje() {
    alert(' comunicarse via correo electronico enlace enlacecalidad911tgz@gmail.com')
}

