let intentos = Math.floor(Math.random() * 10 + 1);
let valorIngreso;
let contador = 1;
let vez = "intento";
let rango = parseInt(prompt("Cual es el numero maximo"));
let numeroSecreto = Math.floor(Math.random() * rango + 1);

alert(numeroSecreto);
alert(`intentos:${intentos}`);

while (valorIngreso != numeroSecreto) {
  valorIngreso = parseInt(prompt(`Ingrese entre 1 y ${rango}`));
  if (valorIngreso <= rango && valorIngreso > 0) {
    if (valorIngreso == numeroSecreto) {
      alert(
        `Acertaste el ${valorIngreso} en ${contador} ${
          contador == 1 ? "vez" : "veces"
        }`
      );
    } else {
      vez = "veces";
      if (contador == intentos) {
        alert("maximos intentos alcanzados");
        break;
      }
      if (numeroSecreto > valorIngreso) {
        alert("el numoer es mayor");
      } else {
        alert("el numero es menor");
      }
      contador++;
    }
  } else {
    alert(`el valor no esta en rango `);
  }
}
