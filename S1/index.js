"use strict";

window.onload = function () {
    console.log('Loaded');

    document.getElementById('form').addEventListener("submit", event => {
        event.preventDefault();
        // console.log("test");

        let orderDetails = {
            name: document.getElementById('nameInput').value,
            mail: document.getElementById('emailInput').value,
            order: document.getElementById('orderInput').value
        }
        document.getElementById('message').innerHTML = printOrder(orderDetails);
    });

    function printOrder(orderDetails) {
        return `<p>The order for the customer ${orderDetails.name} is the following:  ${orderDetails.order}. The customer may be notified by email:  ${orderDetails.mail}</p>`
    };

};


// window.onload = function () {
//     console.log('Loaded');

//     document.getElementById('form').addEventListener("submit", event => {
//         event.preventDefault();
//         // console.log("test");

//         const name = document.getElementById('nameInput').value;
//         const mail = document.getElementById('emailInput').value;
//         const order = document.getElementById('orderInput').value;

//         document.getElementById('message').innerHTML = getMessage(name, mail, order);
//     });

//     function getMessage(name, mail, order) {
//         return `<p>The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${mail}</p>`
//     };
// };