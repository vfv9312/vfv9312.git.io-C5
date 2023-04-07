function extraerDatos() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('password').value;
  
    console.log(`Usuario: ${usuario}, Contraseña: ${contraseña}`);
    // Puedes hacer lo que quieras con los valores de usuario y contraseña, como enviarlos a un servidor para verificar la autenticación del usuario.
  }

  if (validarCredenciales(usuario, contraseña)) {
    const sessionId = generarIdSesion();
    sessionStorage.setItem('sessionId', sessionId);
    window.location.href = 'pagina-privada.html';
  } else {
    alert('Credenciales inválidas. Intente de nuevo.');
  }