var valueA;
var valueB;
onload = function (){

  document.selectA.onchange = valueA;
  document.selectB.onchange = valueB;
  carga1();

}

if (window.XMLHttpRequest){
  var xhr = new XMLHttpRequest();
}
else if(ActiveXObject("Microsoft.XMLHTTP")){
  var xhr = ActiveXObject("Microsoft.XMLHTTP");
}

function carga1(){
  var api = "http://swapi.co/api/";
  xhr.onreadystatechange = gestionarDatos1;
  xhr.open("GET", api , false);
  xhr.send()
}

function gestionarDatos1(){
  if ( xhr.readyState == 4 && xhr.status == 200){
    var objeto = JSON.parse(xhr.responseText);
    document.selectA.innerHTML = "";
    var asd = "<option value=''>Escoge una de las opciones</option>";
    for (var item in objeto)
    {
        response += "<option value='" + responseJSON[item] + "'>" + item + "</option>";
    }
    document.selectA.innerHTML += asd;
  }
  else if( xhr.readyState == 4 && xhr.status != 200){
    var str = "Se ha producido el error: " + xhr.status;
    str += "\n " + xhr.statusText;
    str += "\n Más información: ";
    str += "\n " + xhr.getAllResponseHeaders();
    alert(str);
  }
}
