"use strict";

let input = ""

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault();
        input = document.getElementById('inputTitle').value;
        // console.log(input);
        fetch(`https://www.omdbapi.com/?apikey=e3428ad2&t=${input}`)
            .then(response => response.json())
            .then(data => showMovie(data))
    })

}

function showMovie(data) {
    console.log(data);
    let htmlstring = '';
}