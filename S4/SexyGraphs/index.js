"use strict";
import "../node_modules/chart.js/dist/chart.js";
// import {
//     Chart
// } from "chart.js";


// const config = {
//     type: 'line',
//     data: data,
//     options: {

//     }
// };
// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
// );
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dev', 'Web', '3D'],
        datasets: [{
            label: 'Hype per course',
            data: [13, 15, 20, ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});