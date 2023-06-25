
'use strict'

$(document).ready(function(){

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        var buttonBackToTop = $('.button-back-to-top')

        if(scroll >= 300){
            buttonBackToTop.css({'opacity':'1', 'pointer-events':'all', 'bottom':'48px'});
        }else{
            buttonBackToTop.css({'opacity':'0', 'pointer-events':'none', 'bottom':'24px'});
        }

    });

});
