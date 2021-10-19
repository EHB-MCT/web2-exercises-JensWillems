"use strict";
"use strict";

//     console.log("test");
//     const options = {
//         method: 'GET',
//         mode: 'no-cors',
//         haeders: {
//             //header('Access-Control-Allow-Origin: *');
//             'Access-Control-Allow-Origin': 'http://example.com',
//         }
//         // headers: {
//         //   'Authorization': `Bearer https://cartes.io/`,
//         // }
//       };
// window.onload = function() {
//     fetch('https://cartes.io/api/maps/a61bce50-20be-4b31-a7ee-cfaa31325813',options)
//         .then(response => {
//              console.log("test1");
//              response.json()
//         })
//         .then(data => 
//             {
//                 console.log("test2")
//                 console.log(data)});

// };
fetch('https://cartes.io/api/maps/048eebe4-8dac-46e2-a947-50b6b8062fec')
    .then(response => response.json())
    .then(data => console.log(data));