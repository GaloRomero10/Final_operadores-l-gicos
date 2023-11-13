'use strict'
let age = Number(prompt("Su edad es:"));
let Licence = confirm ("¿Posee una Licencia Profesional?");

if (age>=25 &&Licence) {
    alert("Apto");
} else {
    alert("No apto");
}