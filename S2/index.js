"use strict";

import Team from "./team.js";

let list = [];
let pokemons = [];

let team2 = new Team();


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
            <a href= "#" id="${pokemon.id}" class="btn btn-primary" > Add to team </a>
        </div>`;

        });

        document.getElementById('pokemons').innerHTML = htmlstring;
        document.querySelectorAll('.btn').forEach(item => {
            item.addEventListener('click', event => {
                let id = event.target.id
                console.log(id);
                let teamPokemon = pokemons.find(id);
                console.log(teamPokemon);
            })
        })

        // document.getElementsByClassName('pokeButton').forEach((element) => {
        //     element.addEventListener("click", (e) => {
        //         console.log(e.target.id);
        //         console.log(team1);
        //         console.log(pokemon.name)
        //     })
        // })
    }
}