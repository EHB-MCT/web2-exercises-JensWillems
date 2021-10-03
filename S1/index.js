"use strict";

window.onload = function () {
    console.log('Loaded');

    document.getElementById('form').addEventListener("submit", event => {
        event.preventDefault();
        // console.log("test");

        const name = document.getElementById('nameInput').value;
        const mail = document.getElementById('emailInput').value;
        const order = document.getElementById('orderInput').value;

        document.getElementById('message').innerHTML = getMessage(name, mail, order);
    });

    function getMessage(name, mail, order) {
        return `<p>The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${mail}</p>`
    };
};