document.forms['formulario'].addEventListener('submit', enviar);
function enviar(){
if( formulario.foro.checked == true){
  formulario.action = "paginas/Foros.html";
}
if( eventos.checked == true){
  formulario.action = "paginas/Eventos.html";
}
}
