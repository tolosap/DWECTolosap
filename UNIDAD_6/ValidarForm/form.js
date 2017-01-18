onload = function() {
  captcha = Math.round(Math.random() * (10000 - 1000) + parseInt(1000));
  var cap = document.getElementsByClassName('captcha')[0];
  cap.innerHTML = captcha;
}

//creamos las variables
var captcha;
var numErr = 0;
var listaErr = "";
//validar nombre
function valNom(){
  var nom = document.getElementById('nombre').value;
  if (nom == null || nom.length == 0 || !(/^\S+$/.test(nom))){
    listaErr += "Error, revise el nombre. <br/>"
    numErr++;
  }
}

//validar apellido
function valApell() {
  var apell = document.getElementById('apell').value;
  var nom2 = document.getElementById('nombre').value;
  if ( apell == null || apell.length == 0 || !(/^\S+[\s?\S+]*$/.test(apell)) || apell == nom2 ){
    listaErr += "Error, revise los apellidos. </br>"
    numErr++;
  }
}

//validar edad
function valEdad(){
  var edad = document.getElementById('edad').value;
  if ( isNaN(edad) || edad < 18){
    listaErr += "Error, edad incorrecta. Debe ser mayor de edad. </br>";
    numErr++;
  }
}

//validar email
function valEma(){
  var email = document.getElementById('email').value;
  if ( !/^\w+@\w+\.\w+$/.test(email) ){
    listaErr += "Error, revise el email. <br/>";
    numErr++;
  }
}

//validar DNI
function valDni(){
  var dni = document.getElementById('dni').value;
  if ( !/^\d{8}([a-z]|[A-Z]){1}$/.test(dni) ){
    listaErr += "Error, revise el DNI. </br> ";
    numErr++;
  }
}

//validar condiciones
function valCond() {
  if (document.getElementById('checkbox').checked){
  }
  else{
    listaErr += "Error, debe aceptar los términos y condiciones </br>";
    numErr++;
  }
}


//validar captcha
function valCapt(){
  var valorC = document.getElementById('myid').value;

  if (valorC == null || valorC.length == 0 || valorC != captcha){
    listaErr += "Error, compruebe el captcha. </br>"
    numErr++;
  }
}

function validarForm(){
  valNom();
  valApell();
  valEdad();
  valEma();
  valDni();
  valCond();
  valCapt();
  var error = document.getElementsByClassName('errores')[0];
  if (numErr > 0){
    error.innerHTML = listaErr;
    error.style.color = "red";
  }
  else{
    error.innerHTML = "Formulario enviado correctamente."
    error.style.color = "green";
  }
}
