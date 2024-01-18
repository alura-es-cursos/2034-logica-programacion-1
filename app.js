//variables 
let numeroMaximoPosible=3;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;//utilizamos el metodo math para eliminar dicimales y para buscar numeros ramdon;
let numeroUsuario= 0;// pide el numero que el usuario cree que es el secreto
let contador = 1;
//let palabraVeces='vez';
let maximoIntentos=prompt("ingrese la cantidad de intentos que desea tener ");
//añadimos el bucle white para que que se repita hasta que el usuario acerte 
while (numeroUsuario != numeroSecreto ) {
//alertas de inicio que muestra el numero de usuario 
//alert("Hola mundo ");
    numeroUsuario = prompt(`ingrese un numero de 1 a ${numeroMaximoPosible}`);
    console.log(numeroUsuario);
/* este esta es la condicion que evalua si el numero es el numero secreto o no  */
    if(numeroUsuario == numeroSecreto){
        /*hacemos uso del operador ternario para reducir el codigo el cual es ${termino1 => termino2 ? lo que mostrara si se cumple la condicion 
         : lo que se va a mostrar si no se cumple la condicion } el operador ? es el que permite hacer la consulta condicional */
	    alert(`acertaste en al numero ${numeroSecreto} en la cantidad de ${contador}  ${contador == 1 ? 'vez' : 'veces' }`)}
// agregamos una condicion adicion dentro del else para verificar si es mayor o menor y mostrarlo atravez de un alert
    else{
        
        if(numeroUsuario>numeroSecreto){
        alert(`El numero ${numeroUsuario} es mayor que el numero secreto`);
        }
        else{
        alert(`El numero ${numeroUsuario} es menor que el numero secreto `);
        }
        contador++;// incrementamos el contador en uno para el siguiente intento utilizamos la mejor sintaxis ya que existenten 3 x=x+1 x+=1 x++
        //palabraVeces='veces'

        // se crea una condicional que evalua el numero y determina en que intento esta 
        if (contador > maximoIntentos){
            alert(`lo siento ya llegaste al numero de intentos permitido el cual era ${maximoIntentos}`);
            break;
        }
        //alert("no acertaste el numero" )

	}

}