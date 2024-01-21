alert('Bienvenidos al juego del número secreto');

//Variables

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let min = 1;
let max = 10;
let numeroSecreto = Math.floor(min + Math.random() * max);
let maximosIntentos = 3;

console.log('Numero secreto: ', numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${min} y ${max} por favor:`));
    console.log(`Numero usuario: ${numeroUsuario} (intento ${intentos})`);

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
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
        intentos = intentos ++;
        palabraVeces = 'veces';
    }
    if (intentos > maximosIntentos) {
        alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
        break;
    }
}


/*
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
*/
