$(function () {
  'use strict';

  var widget = SC.Widget(document.querySelector('#soundcloud-player iframe'));
  var slice = Function.prototype.call.bind(Array.prototype.slice);
  var PATTERN = /#t=(\d):(\d{2}):(\d{2})/;
  var currNearest;

  /**
   * Converte um tempo #t=H:MM:SS em 'ms'
   * @param  {string} t tempo
   * @return {number}   tempo em 'ms'
   */
  function getTime (t, pattern) {
    var match = t.match(pattern);

    if (!match)
      return 0;

    return (((+match[1] * 60) * 60 ) * 1000) +
           ((+match[2] * 60) * 1000) +
           (+match[3] * 1000);
  }

  /**
   * Obtem um mapeamento 'tempo-em-ms':'dom node'
   */
  var timeMap = slice($('a[href]')).reduce(function (memo, elem) {
    var time = (getTime($(elem).attr('href'), PATTERN)) / 1000;

    if (time)
      memo[time] = elem;

    return memo;
  }, {});

  // setta o mais proximo como o primeiro
  currNearest = getNearest(timeMap, 0);

  widget.bind(SC.Widget.Events.READY, function () {
    widget.bind(SC.Widget.Events.PLAY_PROGRESS, highlightTime);
  });

  /**
   * Encontra, em um array de numeros, o numero
   * mais proximo de um dado.
   * @param  {array} where onde procurar
   * @param  {number} num   numero que setta a
   *                        proximidade
   * @return {number}       o numero mais
   *                        proximo daquele passado
   */
  function getNearest (where, num) {
    var c = where[0];

    for (var i = 0, N = where.length; i < N; i++)
      if (Math.abs(num - where[i]) < Math.abs(num - c))
        c = where[i];

    return c;
  }

  /**
   * Da um 'highlight' no tempo atual
   * @param  {Object} ev evento retornado do
   * widget
   */
  function highlightTime (ev) {
    var time = (ev.currentPosition / 1000) | 0;
    var nearest = getNearest(Object.keys(timeMap), time);

    if (currNearest !== nearest) {
      for (var i in timeMap) {
        if (+i > +nearest)
          $(timeMap[i]).removeClass('time-selected');
        else
          $(timeMap[i]).addClass('time-selected');
      }

      currNearest = nearest;
    }
  }

});
