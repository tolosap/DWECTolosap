onload = function(){
var formulario = document.forms[0];
// var formulario = document.getElementById('formulario');

formulario.onsubmit = function (){
    //Campo donde pondré los errores:
    var err = document.getElementsByClassName('errores')[0];

    //Listado de errores
    var errList ="";

    //Ret es lo que devolverá return cuando acabe la validación
    var ret = true;

    //validar nombre
    var nombre = document.getElementsByName('nombre')[0].value;
    if ( nombre == null || nombre.length == 0){
      errList += "Error en el nombre <br/>";
      rt = false;
    }

    //validar apellidos
    var ape = document.getElementsByName('apellidos')[0].value;
    if ( ape == null || ape.length == 0 ){
      ret = false;
      errList += "Error en apellidos <br/>"
    }

      //validar email
      var mail = document.getElementsByName("email")[0].value;
      if ( !/^\w+@\w+\.\w+$/.test(mail) ){
        errList += "El email es incorrecto <br/>";
        ret = false;
      }
      //comprobar que los dos mails son iguales
      var mailRepe = document.getElementsByName('emailRepe')[0].value;
      if(mail != mailRepe){
        errList += "El email repetido debe coincidir con el email anterior <br/>";
        ret = false;
      }

      //validar sexo
      var sex = formulario.sexo.value;
      if (genero != "H" && genero != "M"){
        errList += "Especifica género <br/>";
        ret = false;
      }

      //validar provincia
      var provincia = document.getElementsByName("provincia")[0].selectedIndex;
      if (provincia == null || provincia == 0){
          errList += "Por favor, escoja una província válida <br/>";
          ret = false;
      }

      //validar telefono
      var telf = document.getElementsByName('telefono')[0].value;
      if (isNaN(telf) || !(/^\d{9,10}$/.test(telf))){
        errList += "El teléfono es erróneo <br/>";
        ret = false;
      }


      // if (formulario.copiaForo.checked == true){
      //   formulario.action = "paginas/Foros.html";
      // }
      // else if (formulario.notificaEventos.checked == true){
      //   formulario.action = "paginas/Eventos.html";
      // }




    if (ret){
      errList = "Formulario enviado";
      err.style.color="blue";
    }else{
      err.style.color="red";
    }


    err.innerHTML = errList;
    return ret;
}
}
