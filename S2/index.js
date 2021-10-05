"use strict";
let list = [];
let pokemons = [];

getPokemon();

function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            list = data.results;

            list.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokeObject => {
                        pokemons.push(pokeObject);
                    });
            });
        });

};
window.onload = function () {
    setTimeout(buildList, 1000);
    console.log(pokemons);

    function buildList() {
        let htmlstring = '';
        pokemons.forEach(pokemon => {
            htmlstring += ` 
            <div id="pokeCard">
            <img src="${pokemon.sprites.front_default}" alt="">
            <p>${pokemon.name} </p>
            <p id="type">${pokemon.types[0].type.name}</p>
            <button id="pokeAdd">add to your team</button>
        </div>`;
        });

        document.getElementById('pokemons').innerHTML = htmlstring;
    }
}