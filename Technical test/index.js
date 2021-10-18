"use strict";

fetch('https://cartes.io/api/maps/048eebe4-8dac-46e2-a947-50b6b8062fec')
    .then(response => response.json())
    .then(data => console.log(data));