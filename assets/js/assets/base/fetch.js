
'use strict'

$(document).ready(function() {

    const fetchName = () => {

        fetch("assets/documents/doc.json")
        .then(response => response.json())
        .then(data => {

            console.log('Success:', data);

            // for(let i = 0; i < data.length; i++){

            // };

        }).catch( error => console.log('Error:', error));

    };

    fetchName();

});
