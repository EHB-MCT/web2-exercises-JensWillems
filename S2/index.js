"use strict";
let list = [];
let pokemons = [];

import Team from "./team.js";


getPokemon();

let team1 = new Team("cool", "Pedro", ["1", "2"]);
team1.describe();

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
    // console.log(pokemons);

    function buildList() {
        let htmlstring = '';
        pokemons.forEach(pokemon => {
            htmlstring += ` 
            <div id="pokeCard">
            <img src="${pokemon.sprites.front_default}" alt="">
            <p>${pokemon.name} </p>
            <p id="type">${pokemon.types.map((type => {
                // console.log(type.type.name);
                return ` ${type.type.name}`;
            }))}</p>
            <button id="${pokemon.name}" class = "pokeButton">add to your team</button>
        </div>`;

        });

        document.getElementById('pokemons').innerHTML = htmlstring;
        document.getElementsByClassName('pokeButton').forEach((element) => {
            element.addEventListener("click", (e) => {
                console.log(e.target.id);
                console.log(team1);
            })
        })
    }
}