onload = function(){
  var formulario = document.forms[0];
  formulario.onsubmit = function(){
    var err = document.getElementsByClassName('errores')[0];
    var errList ="";
    var ret = true;

    //validar nombre
    var nom = document.getElementsByName('nombre')[0].value;
    if (nom == null || nom.length == 0 || !(/^\S+$/.test(nom))){
      errList += "Error en el nombre <br/>"
      ret = false;
    }


    //validar apellidos
    var apellidos = document.getElementsByName('apellidos')[0].value;
    if (apellidos == null || apellidos.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      ret = false;
      errList += "Error en el apellido <br/>";
    }

    //validar genero
    var genero = formulario.sexo.value;
    if (genero != "H" && genero != "M"){
      ret = false;
      errList += "Error en el género <br/>";
    }

    //validar fecha
    var fecha = (document.getElementsByName('fecha')[0].value).split('-');
    var anyo = fecha[0];
    var mes = fecha[1];
    var dia = fecha[2];
    var nf = new Date(anyo,(mes - 1),dia);
    var hoy = new Date();
    var edad = hoy.getFullYear()- anyo - 1;
    if (hoy.getMonth() + 1 - mes > 0){
      edad++;
    }
    if (hoy.getUTCDate() - dia >= 0){
      edad++;
    }
    if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anyo < 0 || anyo >= hoy.getFullYear()){
      errList += "Fecha errónea <br/>"
      ret = false;
    }else if (edad < 18){
      errList += "Debe ser mayor de edad para inscribirse <br/>"
      ret = false;
    }

    //validar teléfono
    var tel = document.getElementsByName('telefono')[0].value;
    if (isNaN(tel) || !(/^\d{9,10}$/.test(tel))){
      errList += "El teléfono es erróneo <br/>";
      ret = false;
    }

    //validar prov
    var prov = document.getElementsByName("provincia")[0].selectedIndex;
    if (prov == null || prov == 0){
      errList += "Error en provincia <br/>";
      ret = false;
    }

    //email
    var email = document.getElementsByName("email")[0].value;
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      errList += "Error en el email <br/>";
      ret = false;
    }
    //validar el epetir email
    var emailRepe = document.getElementById("emailRepe").value;
    if(email != emailRepe){
      errList += "El email debe ser el mismo <br/>";
      ret = false;
    }

    if (formulario.copiaForo.checked == true){
      formulario.action = "Foros.html";
    }
    else if (formulario.notificaEventos.checked == true){
      formulario.action = "Eventos.html";
    }

    if (ret){
      errList = "Formulario enviado";
      err.style.color="blue";
    }else{
      err.style.color="red";
    }

    err.innerHTML = errList;
    return ret;
    localStorage();
  }
}
