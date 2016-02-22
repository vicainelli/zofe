$(document).ready( function(){
  // Altera links externos para abrirem em uma nova aba
  var domain = document.location.protocol+'//'+document.location.host,
    links = $('.main-content a').each(function(index,element) {
    if(element.href.substr(0,domain.length) !== domain) {
      element.target = '_blank';
    }
  });

  $('#search-form').on('submit', function() { return false; })

  $('#search-query').lunrSearch({
    indexUrl: '/assets/js/index.json',
    results : '#search-results',
    entries : '.entries',
    template: '#search-results-template'
  });
});
