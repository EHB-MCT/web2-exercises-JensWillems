"use strict";

class Team {
    constructor(team, trainer) {
        this.teamName = team;
        this.trainerName = trainer;
        this.roster = [];
        console.log(this.trainerName)
    }

}

let myTeam = new Team("cool", "Pedro");