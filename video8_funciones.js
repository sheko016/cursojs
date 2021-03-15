/*Funciones: es un bloque de codido que contiene su propio contenido que se va a declarar una ves y la cual se puede reutilizar
La función puede o no recivir datos
Tambien puede retornar valores o no retornar valores

Las funciones tambien se considera un Objeto
*/

/*Declarar funciones
*/

//Funcion Declarada
function estoEsUnaFuncion() {
	console.log("uno");
	console.log("dos");
	console.log("tres");
}

//Invocacion de funciones
//estoEsUnaFuncion();


function getValor() {
	console.log("uno");
	console.log("dos");
	console.log("tres");
	return "La funcion retorna una cadena de texto";
}

function getParametro($nombre="deconocido", $edad=0) {
	console.log("hola mi nombre es " + $nombre + " y tengo " + $edad + " años");
}

//let valorFuncion = getValor();

//console.log(valorFuncion);


getParametro("deibis", "27");
getParametro();


getDeclarada();

function getDeclarada() {
	console.log('una funciòn delcarada; JS lo que realiza es realiza run barrido de dicho codigo y ordena primero la declaración de variables y luego la declaración de las funciones para despues ejecutar el codigo');
}


getDeclarada();

//funciones anonimas.
/*Funciones anonimas no es necesario dale un nombre a la función
motivado que ya el nombre lo lleva por la variable constante*/
const funcionExpresada = function() {
	console.log('esto e suna función expresada; las funciones expresada no se pueden llamar antes de declararla obligatoriamente se debe de llamar despues de haber sido declarada la función expresada')
}

funcionExpresada();













