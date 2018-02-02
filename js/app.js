 //función que hace desaparecer mi imagen principal
$(document).ready(function() {
  setTimeout(function() {
        $("#first-section").fadeOut(1500);
    },2000);
});

//función que hace aparecer la siguiente pantalla
$(document).ready(function() {
    setTimeout(function() {
        $("#second-section").fadeIn(1500);
    },2000);
});
