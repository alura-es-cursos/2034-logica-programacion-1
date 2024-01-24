/*
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
 muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/
let dia = prompt('ingrese un dia de la semana')
if(dia == "sabado" || dia == "domingo"){
    console.log('Es finde')
}else{
    console.log('buena semana :(')
}


/*Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
*/

let numero = prompt('ingrese un numero entero')

if(numero < 0){
    console.log(`el numero ${numero} es negativo`)
}else{
    console.log(`el numero ${numero} es positivo`)
}

/*
Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intenta nuevamente para ganar.".
*/

let puntuacion = prompt('ingresa la puntuacion')
if(puntuacion >= 100 ){
    console.log(`¡Felicidades, has ganado!`)
}else{
    console.log(`Intenta nuevamente para ganar.`)
}
/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.
*/
let saldo = 300;
alert(`tu saldo es ${saldo}`)

// Pide al usuario que ingrese su nombre mediante un prompt. 
//Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt('ingresa tu nombre')
alert(`Bienvenid ${nombre} a esta practica!`)