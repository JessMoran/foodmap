$(document).ready(function() {  //función que hace desaparecer mi imagen principal
  setTimeout(function() {
        $("#first-section").fadeOut(1500);
    },2000);
});

$(document).ready(function() { //función que hace aparecer la siguiente pantalla
    setTimeout(function() {
        $("#second-section").fadeIn(1500);
    },2000);
});
