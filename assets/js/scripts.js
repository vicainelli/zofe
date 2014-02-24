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
  var domain = document.location.protocol+'//'+document.location.host,
    links = $('.entry-content a').each(function(index,element) {
    if(element.href.substr(0,domain.length) !== domain) {
      element.target = '_blank';
    }
  });

});
