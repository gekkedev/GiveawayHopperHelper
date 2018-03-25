// ==UserScript==
// @name        GiveawayHopper Helper Alpha
// @namespace   https://github.com/L3n1n/GiveawayHopperHelper
// @description Only group buttons
// @version     0.1.7
// @author      L3n1n
// @match       https?://giveawayhopper.com/*
// @updateURL   https://raw.githubusercontent.com/L3n1n/GiveawayHopperHelper/master/GiveawayHopperHelper.js
// @downloadURL https://raw.githubusercontent.com/L3n1n/GiveawayHopperHelper/master/GiveawayHopperHelper.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at      document-end
// ==/UserScript==

(function() {
	
	// lag fix
	$('body').css('background', '#444');
    $('body').css('animation', 'none');
	
	$('.panel-body .col-md-12').each(function(){
		if ( $(this).find('.fa').hasClass("fa-steam") ) {}
		if ( $(this).find('.fa').hasClass("fa-twitter") ) {
		$(this).css('display', 'none');
	}
	if ( $(this).find('.fa').hasClass("fa-facebook") ) {
		$(this).css('display', 'none');
	}
	if ( $(this).find('.fa').hasClass("fa-instagram") ) {
		$(this).css('display', 'none');
	}
	if ( $(this).find('.fa').hasClass("fa-link") ) {
		$(this).css('display', 'none');
	}
	if ( $(this).find('.fa').hasClass("fa-youtube") ) {
		$(this).css('display', 'none');
	}
	else {}
	});
})();
