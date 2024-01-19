alert('Bienvenidos al juego del número secreto');

//Variables

let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let min = 1;
let max = 10;
let numeroSecreto = Math.floor(min + Math.random() * max);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Me indicas un número entre ${min} y ${max} por favor:`);

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > max || numeroUsuario < min){
          alert(
            `El número ${numeroUsuario} no está entre ${min} y ${max}. Intenta nuevamente`)
        } else if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

while (numeroUsuario > 10 || numeroUsuario < 0){
  alert('El número debe ser entre 1 y 10')}