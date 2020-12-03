// ==UserScript==
// @name        k_extreme
// @namespace   kkam
// @match       *://xf-brzesko.gymos.pl/rezerwacja-zajec/*
// @version     1.1
// @grant       none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==
$(document).ready(function(){
  $('div[class="entry"]').each(function(index){
      var id = ($(this).data("id"));
      var data = ($(this).data("datazajec"));
      $(this).append('<div id="zapisz" data-idzajec="'+id+'" data-datazajec="'+data+'" data-typzajec="" class="zapisz shadow">ZAPISZ SIĘ</div>')
  });
});
