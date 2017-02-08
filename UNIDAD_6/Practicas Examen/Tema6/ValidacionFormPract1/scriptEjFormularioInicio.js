onload = function(){
var formulario = document.forms[0];

//seleccionamos el primer formulario y lo hacemos variable
// var formulario = document.getElementById('formulario');

//cuando le demos a submit
formulario.onsubmit = function validacion(){
    //Campo donde pondré los errores:
    var err = document.getElementsByClassName('errores')[0];
    //Listado de errore
    var errList ="";
    //Ret es lo que devolverá return cuando acabe la validación
    var ret = true;

    //validar nombre
    //valor de nombre a variable
    var nombre = document.getElementById("nombre")[0].value;
    //si no se cumple, salta error y se añade el tipo de error
    if( nombre == null || nombre.length == 0 || !(/^\S+$/.test(nom))){
      errList += "Error en el nombre. <br>";
      ret = false;
    }

    //validar apellidos
    var apellidos = document.getElementById("apellidos")[0].value;
    if( apellidos == null || apellidos.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      errList += "Error en los apellidos. <br>";
      ret = false;
    }

    //validar email
    var email = document.getElementById('email')[0].value;
    if( email == null || email.length == 0 || !/^\w+@\w+\.\w+$/.test(email)){
      errList += "Error en el email <br>";
      ret = false;
    }

    //validar emailRepe
    ////////////////////////////
    var emailRepe = document.getElementById('emailRepe')[0].value;
    if ( emailRepe == null || email.length == 0 || emailRepe != email){
      errList += "Error en el email repetido <br>";
      ret = false;
    }

    //validar sexo
    var genero = formulario.sexo.value;
    if ( genero != "H" && genero != "M"){
      errList += "Error en el genero <br>";
      ret = false;
    }

    //validar anyo
    var fecha = (document.getElementsByName('fecha')[0].value).split('-');
    var anyo = fecha[0];
    var fechaH = new Date();
    var anyoH = fechaH.getFullYear();
    if ( anyo > anyoH){
      errList += "Error, debes ser mayor de edad <br>";
      ret = false;
    }

    //validamos el teléfono
    var tel = document.getElementsByName('telefono')[0].value;
    if (isNaN(tel) || !(/^\d{9,10}$/.test(tel))){
      errList += "El teléfono es erróneo <br/>";
      ret = false;
    }

    //validamos la selección
    var prov = document.getElementsByName("provincia")[0].selectedIndex;
    if (prov == null || prov == 0){
        errList += "Escoja una provincia <br/>";
        ret = false;
    }


    // //validamos la fecha
    // var fecha = (document.getElementsByName('fecha')[0].value).split('-');
    // var ano=fecha[0];
    // var mes=fecha[1];// de 0 a 11
    // var dia=fecha[2];// 1 a 31
    // console.log(dia + " " + mes + " " + " " + ano);
    // var nf= new Date(ano,(mes - 1),dia);
    // console.log(nf);
    //
    // var hoy = new Date();
    // //resto los años de las dos fechas
    // var edad = hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año
    // //si resto los meses y me da mayor que 0, ha cumplido años
    // if (hoy.getMonth() + 1 - mes > 0){
    //     edad++;
    // }
    // //si resto los dias y me da menor que 0 entonces no ha cumplido años.
    // //si da mayor o igual si ha cumplido
    // if (hoy.getUTCDate() - dia >= 0){
    //     edad++;
    // }
    // console.log("Edad " + edad);
    // if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0 || ano >= hoy.getFullYear()){
    //   errList += "La fecha es errónea <br/>"
    //   ret = false;
    // }else if (edad < 18){
    //   errList += "Debe ser mayor de edad para inscribirse <br/>"
    //   ret = false;
    // }


    if (ret){
      errList = "Tu petición se ha enviado correctamente";
      err.style.color="blue";
    }else{
      err.style.color="red";
    }
    err.innerHTML = errList;
    return ret;
}
}
