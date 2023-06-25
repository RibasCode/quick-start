
'use strict'

$(document).ready(function() {

    let initialAnimationContainer = $('.initial-animation')

    setTimeout(function(){
        initialAnimationContainer.addClass('active');

        setTimeout(function(){
            initialAnimationContainer.remove();
        }, 751);

    }, 640);

});
