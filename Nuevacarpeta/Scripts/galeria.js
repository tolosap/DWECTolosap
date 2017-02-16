$(document).ready(function(){
  $(".filter-button").click(function(){
    // Para borrar la clase active que hace que el boton activo tenga unas propiedades CSS:
    var botonActivo = $('button').filter('.active');
    botonActivo.removeClass('active');
    var value = $(this).attr('data-filter');
    // Le ponemos las propiedades CSS al boton que vamos a activar:
    var activo = $(this).addClass('active');
    if(value == "all"){
      $('.filter').show('1000');
    }else{
  $(".filter").not('.'+value).hide('3000');
  $('.filter').filter('.'+value).show('3000');
}
});
});
