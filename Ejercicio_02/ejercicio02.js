'use strict'
let promStudent = Number(prompt("Ingrese su promedio:"));
let ingreFam = Number(prompt("Ingrese los ingresos mensuales familiares:"));

if (promStudent>=8.5 && ingreFam<=600) {
    alert("Aprobado.");
} else {
    alert("Desaprobado.");
}