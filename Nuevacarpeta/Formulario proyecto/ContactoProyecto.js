nload = function(){
var formulario = document.forms[0];
formulario.onsubmit = function(){
    var err = document.getElementsByClassName('errores')[0];
    var errList ="";
    var ret = true;

    //validamos el nombre
    var nom = document.getElementsByName('nombre')[0].value;
    console.log(nom);
    if (nom == null || nom.length == 0 || !(/^\S+$/.test(nom))){
         errList += "El nombre es erróneo <br/>"
         ret = false;
    }


    //Email
    var email = document.getElementsByName("email")[0].value;
    console.log(email);
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      errList += "El email es incorrecto <br/>";
      ret = false;

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
