$(document).ready(function() {
    $("#modo-claro").click(function(e) {
      e.preventDefault();
      $("body").removeClass("dark-mode");
    });
  
    $("#modo-oscuro").click(function(e) {
      e.preventDefault();
      $("body").addClass("dark-mode");
    });
  });
  