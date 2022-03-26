let s = 0;
let total = 0;

let personas = [];

function prom(a, b) {
  return a / b;
}

for (let i = 1; i < 6; i++) {
  let s = parseInt(prompt("Ingresa la edad de la persona numero " + i));
  total = total + s;
  personas.push(s);
}

//Muestro datos en consola para verificacion propia
console.log("Edades ingresadas: " + personas);
console.log(prom(total, personas.length));

//Escribo en pantalla
document.write("La suma de las edades registradas es de: " + total + " años.");
document.write(
  " El promedio de las personas registradas es de: " +
    prom(total, personas.length) +
    " años"
);
