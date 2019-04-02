$(document).ready(function(){

  $("#navbar-roulette").click(function(event){
    $(".rules").hide();
    $(".roulette").show();
  });

  $("#navbar-rules").click(function(event){
    $(".rules").show();
    $(".roulette").hide();
  });
  // When I click any `<a href="#" ...>` gh-pages throws 404
  // I don't use the links to href anyway, everything's done in js
  $("a").click(function(event){
    event.preventDefault();
  });
});
