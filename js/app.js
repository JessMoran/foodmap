//variables globales en uso para todas las funciones

var $foodInput = $("#food");
var $btnSearch = $("#search");


//funciona al cargar la página
function loadPage (){
  $foodInput.keyup(searchFood);

}

//Valida que no tenga espacios y activa el boton search
function searchFood () {

  if($(this).val().trim().length > 0) {
  $btnSearch.removeAttr("disabled");
  } else {
  $btnSearch.attr("disabled" , true);
  }
}


//funciones Segundavista
//Valida si el código es igual al enviado anteriormente
function validateCode (){

 if ($(this).val().trim().length > 0) {
   $btnNext2.removeAttr("disabled");
 } else {
   $btnNext2.attr("disabled" , true);
 }

}

$(document).ready(loadPage);
