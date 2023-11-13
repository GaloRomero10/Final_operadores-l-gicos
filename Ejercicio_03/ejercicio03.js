'use strict'
let apod = prompt('Ingrese su apodo:');

if (apod === null || apod === "") {
    apod = 'Anonymus';
}
    alert('Su apodo es: ' + apod);