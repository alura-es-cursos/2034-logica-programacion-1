

let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos= 1 ;
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = Number(prompt("Me indicas un número entre 1 y 10 por favor:"));
  console.log(numeroUsuario);
  if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número es: ${numeroUsuario}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor');
    } else {
      alert('El número secreto es mayor');
    }
  }
}
console.log(numeroUsuario);
if (numeroUsuario == numeroSecreto){
    alert (´Acertaste, el número es: ${numeroUsuario´});
  } else{
    if(numeroUsuario > numeroSecreto) {
       alert('Acertaste,El número secreto es menor');
    } else {
        alert('El número secreto es mayor');
    }
    //alert('Lo siento, no acertaste el numero');
    }
 }


