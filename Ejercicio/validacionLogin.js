// Elementos de Login.html
var emailUser=document.getElementById(`emailUser`);
var passwordUser=document.getElementById(`passwordUser`);
var btn_submit_login=document.getElementById('btn_submit_login');
var notificacionEmailLogin=document.getElementById(`notificacionEmailLogin`);
var notificacionPasswordLogin=document.getElementById(`notificacionPasswordLogin`);

// Evento al cargar la pagina
addEventListener('DOMContentLoaded',inicio,false);

//
function inicio(){
    emailUser.addEventListener('blur', validarCorreoLogin,false);
    passwordUser.addEventListener('blur', validarPasswordLogin,false);
    emailUser.addEventListener('focus', ocultarNotificacion,false);
    passwordUser.addEventListener('focus', ocultarNotificacion,false);
    btn_submit_login.disabled= true;
}

function mostarNotificacion(casilla){
    switch (casilla) {
        case 4:
            notificacionEmailLogin.style.display='block';
        break;
        case 5:
            notificacionPasswordLogin.style.display='block';
        break;
    }
}

function ocultarNotificacion(){
    if(notificacionEmailLogin.style.display=='block'){
        notificacionEmailLogin.style.display='none';
    }
    if(notificacionPasswordLogin.style.display=='block'){
        notificacionPasswordLogin.style.display='none';
    }
}

function validarCorreoLogin(){
    var formatoCorreo=/\w+\@+\w+\.+[a-zA-Z]/;

    if (emailUser.value === ''){
       mostarNotificacion(4);
        return notificacionEmailLogin.innerHTML= 'El correo es obligatorio';
    }
      else if (!formatoCorreo.test(emailUser.value)){
        mostarNotificacion(4);
        return notificacionEmailLogin.innerHTML="Este Campo debe cumplir con la estructura 'ejemplo@ejemplo.com'";
    } else {
        return true;
    }
}

function validarPasswordLogin(){
    if (passwordUser.value === ''){
        mostarNotificacion(2);
        return notificacionPasswordLogin.innerHTML='La contraseña es obligatoria';
         } else if (validarCorreoLogin()== true){
            btn_submit_login.disabled= false;
        }
}