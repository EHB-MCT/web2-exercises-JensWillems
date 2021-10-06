"use strict";

// import {
//     getPokemon
// } from "./index.js";


class Team {
    constructor(team, trainer, roster) {
        this.teamName = team;
        this.trainerName = trainer;
        this.roster = roster;

        this.html = document.getElementById("team");
    }
    describe() {
        this.html.innerHTML = `<div>
        <p>${this.teamName} </p>
        <p>${this.trainerName} </p>
        <ul>${this.roster.map((pokemon) => {
            return `<li> ${pokemon} </li>`
        })}</ul>
        </div>`;
    }
    addPokemon(pokemon) {
        let message = "";
        if (this.roster.length >= 6) {
            message + "The roster is full";
        } else if (this.roster.includes(pokemon)) {
            message + "This pokemon is already part of your roster";
        } else {
            message + "The pokemon has been succesfully added to the team!";
            this.roster.push(pokemon);
        }
        return message
    }

}



// console.log(team1.describe())

export default Team