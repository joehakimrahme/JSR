$(document).ready(function(){

  $("#navbar-roulette").click(function(event){
    $(".rules").hide();
    $(".roulette").show();
    $(".handicaps").hide();
  });

  $("#navbar-rules").click(function(event){
    $(".rules").show();
    $(".roulette").hide();
    $(".handicaps").hide();
  });

  $("#navbar-handicaps").click(function(event){
    $(".rules").hide();
    $(".roulette").hide();
    $(".handicaps").show();
  });

});
