// Elementos de Registrase.html
var email=document.getElementById(`email`);
var password=document.getElementById(`password`);
var confPassword=document.getElementById(`confPassword`);
var btn_submit=document.getElementById('btn_submit');
var notificacionEmail=document.getElementById('notificacionEmail');
var notificacionPassword=document.getElementById('notificacionPassword');
var notificacionConfpassword=document.getElementById('notificacionConfpassword');

// Evento al cargar la pagina
addEventListener('DOMContentLoaded',inicio,false);

//
function inicio(){
    email.addEventListener('blur', validarCorreo,false);
    password.addEventListener('blur', validarContraseña,false);
    confPassword.addEventListener('blur', validarConfirmacion,false);
    email.addEventListener('focus', ocultarNotificacion,false);
    password.addEventListener('focus', ocultarNotificacion,false);
    confPassword.addEventListener('focus', ocultarNotificacion,false);
    btn_submit.disabled= true;
}


function mostarNotificacion(casilla){
    switch (casilla) {
        case 1:
            notificacionEmail.style.display='block';       
        break;
        case 2:
            notificacionPassword.style.display='block';
        break;
        case 3:
            notificacionConfpassword.style.display='block';
        break;
    }
}

function ocultarNotificacion(){
    if(notificacionEmail.style.display == 'block'){
    notificacionEmail.style.display='none';
    }
    
    if (notificacionPassword.style.display=='block'){
        notificacionPassword.style.display='none';
    }
    if (notificacionConfpassword.style.display=='block'){
        notificacionConfpassword.style.display='none';
    }
}


function validarCorreo(){
 
var formatoCorreo=/\w+\@+\w+\.+[a-zA-Z]/;

    if (email.value === ''){
       mostarNotificacion(1);
        return notificacionEmail.innerHTML= 'El correo es obligatorio';
    }
    else if (email.value.length <= 2 || email.value.length >= 50){
        mostarNotificacion(1);
        return notificacionEmail.innerHTML= 'Este Campo debe ser mayor a dos digitos y menor a 50 digitos ';
    }
    else if (!formatoCorreo.test(email.value)){
        mostarNotificacion(1);
        return notificacionEmail.innerHTML="Este Campo debe cumplir con la estructura 'ejemplo@ejemplo.com'";
    } else {
        return true;
    }
}


function validarContraseña(){

   if (password.value === ''){
    mostarNotificacion(2);
    return notificacionPassword.innerHTML='La contraseña es obligatoria';
     }
    else if (password.value.length <= 2 || password.value.length >= 50){
        mostarNotificacion(2);
        return notificacionPassword.innerHTML='Esta campo debe ser mayor a dos digitos y menor a 50 digitos';
    }  else {
        return true
    }
}

function validarConfirmacion(){
    if ( password.value !== confPassword.value){
        mostarNotificacion(3);
        return notificacionConfpassword.innerHTML='La contraseña y la confirmacion deben de coincidir';
    } else if (validarCorreo() == true && validarContraseña() == true ) {
        btn_submit.disabled= false;
    }
}
