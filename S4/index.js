import Cleave from './node_modules/cleave.js/dist/cleave-esm.min.js';
import './node_modules/cleave.js/dist/addons/cleave-phone.be.js';

const nameInput = new Cleave('#name', {
    prefix: "STUDENT-"
});

new Cleave('#date', {
    date: true,
    datePattern: ['DD', 'MM', 'YYYY']
});

new Cleave('#register', {
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.', '.', '-', '.']
});

new Cleave('#age', {
    numeral: true,
    numeralPositiveOnly: true
});

new Cleave('#tel', {
    phone: true,
    phoneRegionCode: 'BE'
});