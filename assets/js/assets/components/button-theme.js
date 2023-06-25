
'use strict'

$(document).ready(function() {

    let body = $('body');
	let buttonTheme = $('.button-theme');
	let buttonThemeSun = $('.button-theme .sun');
	let buttonThemeMoon = $('.button-theme .moon');

    function darkTheme(){

        if(buttonTheme.hasClass('dark-theme')){

            buttonTheme.css('opacity', '0');

            setTimeout(function(){
                buttonThemeSun.hide();
                buttonThemeMoon.show();
                buttonTheme.css('opacity', '1');
            }, 300);
        }
    };

    function lightTheme(){

        buttonTheme.css('opacity', '0');

        if(buttonTheme.hasClass('light-theme')){

            setTimeout(function(){
                buttonThemeSun.show();
                buttonThemeMoon.hide();
                buttonTheme.css('opacity', '1');
            }, 300);
        }
    };

	buttonTheme.click(function(){

        body.toggleClass('light-theme dark-theme');
        buttonTheme.toggleClass('light-theme dark-theme');

        lightTheme();
        darkTheme();
	});

    lightTheme();
    darkTheme();

});
