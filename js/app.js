//variables globales en uso para todas las funciones

var $foodInput = $("#food");
var $btnSearch = $("#search");


//funciona al cargar la página
function loadPage (){
  $foodInput.keyup(validateFood);
  $foodInput.keyup(filterFood);
}

//Valida que no tenga espacios y activa el boton search
function validateFood () {

  if($(this).val().trim().length > 0) {
  $btnSearch.removeAttr("disabled");
  } else {
  $btnSearch.attr("disabled" , true);
  }
}

//Pinta los elementos necesarios en el HTML
function paintFood (restaurant) {
  var $foodContainer = $("<div />");
  var $textFood = $("<h1 />");
  var $imgFood = $("<img />");

  $foodContainer.addClass("food-container");
  $textFood.addClass("food");

  $textFood.text(restaurant.name);
  $imgFood.attr('src', restaurant.image);

  $foodContainer.append($textFood);
  $foodContainer.append($imgFood);


 $("#rest-container").prepend($foodContainer);

}

//Filtra la información que ingresa el usuario con la base de datos
function filterFood (){
  var searchInput = $(".search-food").val().toLowerCase();
    if($(".search-food").val().trim().length > 0) {
      var filteredFood = data.filter(function(restaurant) {
        //console.log(restaurant);
        return restaurant.name.toLowerCase().indexOf(searchInput) >= 0;
      });
      $("#rest-container").empty();
      filteredFood.forEach(function(restaurant) {
        paintFood(restaurant);
      });
    } else {
      $("#rest-container").empty();
        data.forEach(function(restaurant){
        paintFood(restaurant);//se llamma a la función "paintFood" para que tenga acceso a "restaurant" y lo logre pintar
    });
  }
  //console.log(filteredFood);

}

$(document).ready(loadPage);
