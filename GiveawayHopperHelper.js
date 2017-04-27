// ==UserScript==
// @name        GiveawayHopper Helper Alpha
// @description Only group buttons
// @version     0.1.1
// @author      L3n1n
// @match       https://giveawayhopper.com/*
// @updateURL   #
// @downloadURL #
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at      document-end
// ==/UserScript==

(function() {
    $('.panel-body .col-md-12').each(function(){
        if ( $(this).find('.fa').hasClass("fa-steam") ) {}
        else {
            $(this).css('display', 'none');
        }
    });
})();