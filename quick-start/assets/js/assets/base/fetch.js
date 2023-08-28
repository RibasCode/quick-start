
'use strict'

$(document).ready(function() {

    const fetchName = () => {

        fetch("assets/documents/cards.json")
        .then(response => response.json())
        .then(data => {

            // console.log('Success:', data);

            for(let i = 0; i < data.length; i++){

                let title = data[i].title;

                let cardHTML = `
                    <div id="card-${i}" class="card">
                        <h4 class="title">${title}</h4
                    </div>
                `;

                // $('section#section-name .card-container').append(cardHTML);

            };

        }).catch( error => console.log('Error:', error));

    };

    fetchName();

});
