"use strict";

getPokemon();

function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => showPokemon(data));


};

function showPokemon(pokemon) {
    console.log(pokemon)
    pokemon.forEach(pokemon => {
        document.getElementById("pokeCard").innerHTML = `${pokemon.name}${pokemon.name}`;

    });

};