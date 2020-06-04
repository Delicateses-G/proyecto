var email=document.getElementById(`email`);
var password=document.getElementById(`password`);
var confPassword=document.getElementById(`confPassword`);
var btn_submit=document.getElementById('btn_submit');

addEventListener('DOMContentLoaded',inicio,false);


function inicio(){
    email.addEventListener('blur', validarRegistro,false);
    password.addEventListener('blur', validarRegistro,false);
    confPassword.addEventListener('blur', validarRegistro,false);
    btn_submit.disabled= true;
}



function validarRegistro(){
 
var formatoCorreo=/\w+\@+\w+\.+[a-zA-Z]/;

    if (email.value === ''){
       return console.log('El correo es obligatorio');
    }
    else if (email.value.length <= 2 || email.value.length >= 50){
        return  console.log('Este Campo debe ser mayor a dos digitos y menor a 50 digitos '+ email.value.length);
    }
    else if (!formatoCorreo.test(email.value)){
        return console.log("Este Campo debe cumplir con la estructura 'ejemplo@ejemplo.com'");
    }
     else  if (password.value === ''){
        return console.log('La contraseña es obligatoria');
     }
    else if (password.value.length <= 2 || password.value.length >= 50){
        return console.log('Esta campo debe ser mayor a dos digitos y menor a 50 digitos');
    }
    else if ( password.value !== confPassword.value){
        return console.log('La contraseña y la confirmacion deben de coincidir');
    } else {
        btn_submit.disabled=false;
    }

}