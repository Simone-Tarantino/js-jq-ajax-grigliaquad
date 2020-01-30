// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready (function() {
  $('.square').click(function(){
    var thisSquare = $(this);
    var number;
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato) {

        var squareContent = thisSquare.html().length;
        if (squareContent == 0) {
          if (data.response <= 5) {
            thisSquare.addClass('background-y');
            thisSquare.append(data.response);
          } else if (data.response > 5) {
            thisSquare.addClass('background-g');
            thisSquare.append(data.response);
          }
        }
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    });
  });
});
