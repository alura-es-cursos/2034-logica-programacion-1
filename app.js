alert("Bienvenido Jugador");
//Variables
let numeroMaximo = parseInt(prompt('Indique el rango maximo del numero secreto.'));
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6;

console.log(numeroSecreto);
while(numeroUsuario!=numeroSecreto){

    numeroUsuario=parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor: `));
    
    console.log(numeroUsuario);
    

    /*Este codigo realiza la comparacion*/

    if (numeroUsuario==numeroSecreto){
        //Acertamos la sentencia es correcta
        alert(`Acertaste, el numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos==1?'vez':'veces' }.`);
    }else{
        //No acertamos la sentencia no se cumple
        if(numeroUsuario<numeroSecreto){
            alert('El numero secreto es mayor');
        }else{
            alert('El numero secreto es menor');
        }
        intentos++;
        if(intentos>maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos `);
            break;
        }
    }
}