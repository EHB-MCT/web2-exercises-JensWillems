"use strict";

let random = 0;

function getPlayerNumber() {
    getRandomNumber();
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        // console.log(random)
        compareNumber(document.getElementById('input').value).then(
            result => {
                document.getElementById('message').innerHTML = "U guessed right!"
                console.log("good")
            },
            error => {
                document.getElementById('message').innerHTML = "Wrong!"
                console.log(error)
                console.log("wrong")
            }
        )
        let playerInput = document.getElementById('input').value;
        // document.getElementById('message').innerText = random;
    })
};

function getRandomNumber() {
    random = Math.floor(Math.random() * 20) + 1;
    // console.log(random);
};

function compareNumber(playerInput) {
    return new Promise((resolve, reject) => {
        console.log(random)
        if (playerInput > random) {
            reject("too high")
        } else if (playerInput < random) {
            reject("too low")
        } else if (playerInput == random) {
            resolve("U guessed the mystery number")
        }
    })
};
getPlayerNumber();