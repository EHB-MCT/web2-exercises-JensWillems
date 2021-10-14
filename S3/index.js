"use strict";

let input = ""
let time = 0;

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault();
        input = document.getElementById('inputTitle').value;
        // console.log(input);
        fetch(`https://www.omdbapi.com/?apikey=e3428ad2&t=${input}`)
            .then(response => response.json())
            .then(data => {
                showMovie(data);
                getTime(data);
                // console.log(data);
            })
    })

}

function showMovie(data) {
    // console.log(data);
    let htmlstring = '';
    htmlstring += `
    <div class="card-body">
    <img src="${data.Poster}" class="card-img" alt="">
       <h5 class="card-title"> ${data.Title}</h5>
       <p class"card-text">${data.Director}, 
       ${data.Runtime},
       ${data.Year}</p>
       <button id ="btn">+</button>
       </div>
    `

    let films = document.getElementsByClassName('col-md-8');
    for (let i = 0; i < films.length; i++) {
        // console.log(films[i]);
        films[i].innerHTML = htmlstring;
    }
}

function getTime(data) {
    console.log(data);
    document.getElementById('btn').addEventListener('click', e => {
        // console.log(data.Runtime);
        let timeNumber = Number(data.Runtime.substring(0, 2));
        time += timeNumber;
        // console.log(time);

        let counterhtmlstring = `
        ${time} min
        `

        document.getElementById('counter').innerHTML = counterhtmlstring;

    })
}