/********** Video 2 *********
Constante

CONST = Son aquellas variables que no van a cambiar su valor dentro del flujo
CONST objeto o array si se puede agregar nuevos atributos, xq su valor no va a cambiar son sus atributos que van a cambiar
*/

const PI = 3.1416;
console.log(PI)

let objetoPerson = {
	nombre: "deibis",
	edad: "27"
}

let arraycolores = ['negro', 'blanco', 'azul'];

console.log(objetoPerson);
console.log(arraycolores);
 //Add Propiedades nuevas al objeto
objetoPerson.email = "deibiscontreras016@gmail.com";

arraycolores.push('ananrajnado');
console.log(objetoPerson);
console.log(arraycolores);