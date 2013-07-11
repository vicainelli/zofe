$(document).ready( function(){

  // funcao para menu responsivo
  $('#mobile-menu-btn').toggle( function( event ){
    event.preventDefault();
    $('#mobile-menu').fadeIn();
  }, function( event ){
    event.preventDefault();
    $('#mobile-menu').fadeOut();
  });


  // Altera links externos para abrirem em uma nova aba
  // -- Armazena endereco da pagina
  var dominio = document.location.protocol+'//'+document.location.host;
  // -- Compara links com o dominio atual, se for um dominio externo adiciona _blank
  var links = $('a').each(function(index,element) {
    if(element.href.substr(0,dominio.length) !== dominio) {
      element.target = '_blank';
    }
  });

});
