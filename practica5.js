/*
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
*/
console.log('Bienvenido Edurado')
/*
Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/
let nombre = prompt('ingrese un nombre')
console.log(`Bienvenido ${nombre}`)


/*
Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/
let nombreA = prompt('ingrese un nombre')
alert(`Bienvenido ${nombreA}`)

/*
Utiliza prompt y haz la siguiente pregunta: 
¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable 
y muestra la respuesta en la consola del navegador.
*/

let lenguajeLike = prompt('Cual es el lenguaje que mas te gusta?');
console.log(lenguajeLike)
/*
Crea una variable llamada "valor1" y 
otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores 
y almacena el resultado en una tercera variable 
llamada "resultado".
 Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

let valor1 = parseInt(prompt('metele un numero'))
let valor2 = parseInt(prompt('metele otro numero'))
let resultado = valor1 + valor2
console.log(`La suma del ${valor1} y  ${valor2} es igual  ${resultado}`)

/*
Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado 
en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] 
es igual a [resultado]." en la consola.
*/
let valor3 = parseInt(prompt('metele un numero'))
let valor4 = parseInt(prompt('metele otro numero'))
let resultado1 = valor3 - valor4
console.log(`La diferencia entre el ${valor3} y ${valor4} es igual  ${resultado1}`)


/*
Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, utiliza un if 
para verificar si la persona es mayor o menor de edad y 
muestra un mensaje apropiado en la consola.
*/

let edad = prompt('ingrese la edad')
console.log(edad > 18 ? "sos mayor" : "sos menor" )
/*
Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, negativo o cero utilizando 
un if-else y muestra el mensaje correspondiente.
*/
let numero = prompt('ingrese un numero')
if(numero > 0){
    alert('es positivo')
}else if(numero < 0){
    alert('es negativo')
}else{
    alert('es cero')
}

/*
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/

let inicio = 1;
while(inicio <= 10){
    console.log(inicio);
    inicio++
}

/*

Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota 
es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/

let nota = prompt('ingrese nota')
console.log(nota >= 7 ? "aprobado" : "desaprobado")
/*
Utiliza Math.random para generar cualquier número aleatorio
 y muestra ese número en la consola.
*/
console.log(`el numero aleatorio es ${Math.random()*10+1}`)

/*
Utiliza Math.random para generar un número 
entero entre 1 y 10 y muestra ese número en la consola.
*/
console.log(`el numero aleatorio entre 1 y 10 ${ Math.floor(Math.random()*10+1)}`);

/*
Utiliza Math.random para generar un número entero entre 1 y 1000 y 
muestra ese número en la consola.
*/
console.log(`el numero aleatorio entre 1 y 1000 ${ Math.floor(Math.random()*1000+1)}`);