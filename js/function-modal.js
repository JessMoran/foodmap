/*Funcionalidad pantalla principal*/
/*Variables globales para uso de las funcionalidades posteriores*/
var events =[];
var $descriptionInput = $("#description");
var $btnEvent = $("#create");

var $eventInput =$("#event");
var $tagInput =$("#tag");
var $dateInput =$("#date");

/*funcion que se realiza al cargar la página*/
function loadPage(){
  $descriptionInput.keyup(validateEvent);
  $btnEvent.click(addEvent);
  $btnEvent.click(paintEvent);
}

/*funcion que valida que el usuario haya llenado los campos del modal*/
function validateEvent () {
  if($(this).val().trim().length > 10) {
    $btnEvent.removeAttr("disabled");
  } else {
    $btnEvent.attr("disabled" , true);
  }
}

/* función que guada la informacion que el usuario ingresa en el modal*/
function addEvent(e){
  e.preventDefault();
  // guardamos el valor del texto que agrega en los inputs el usuario
  var nameEvent = $eventInput.val();
  var tag = $tagInput.val();
  var date = $dateInput.val();
  var description = $descriptionInput.val();
  // guardamos los valores anteriores en un objeto
  var eventCreate = {
    "name": nameEvent,
    "tag": tag,
    "date": date,
    "description": description
    };
    events.push(eventCreate);
    paintEvent(eventCreate);
    console.log(events,eventCreate);
}

function paintEvent (eventCreate){
  var $newEvent = $("<div />");
  var $newtittle = $("<h3 />");
  var $description = $("<p />");
  var $btn = $("<a />");
  var $btn2 = $("<a />");

  $newEvent.addClass("thumbnail");
  $btn.addClass("btn btn-primary btn-card");
  $btn2.addClass("btn btn-default btn2-card");

   $newEvent.append($newtittle);
   $newEvent.append($description);
   $newEvent.append($btn);
   $newEvent.append($btn2);

   $description.text(eventCreate.name);
   $description.text(eventCreate.date);
   $description.text(eventCreate.description);

//se agrega el elemento creado por el DOM a un elemento que está en HTML
  $("#container-cards").prepend($newEvent);

}


$(document).ready(loadPage);
