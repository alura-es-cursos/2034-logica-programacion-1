/*
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
Muestra cada número.
*/

let numero = 1;
let contador = 0;
while(contador < 10){
    console.log(`numero ${numero}`)
    numero++;
    contador++;
}

/*
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. 
Muestra cada número.
*/
let numeroA = 10;
let contadorA = 10;
while(contadorA > 0){
    console.log(`numero ${numeroA}`)
    numeroA--;
    contadorA--;
}
/*
Crea un programa de cuenta regresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando 
un bucle 'while' en la consola del navegador.
*/

let ingreso = prompt('ingrese un numero')
let contadorB = 0;

while(contadorB <= ingreso){
    console.log(`numero ${contadorB}`)
    contadorB++;
}

/*
Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en 
la consola del navegador.
*/

let input = prompt('ingrese un numero')

while(input >= 0){
    console.log(`numero ${input}`)
    input--;
}

