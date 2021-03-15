/*Concatenaciòn y interporación*/

let nombre = "Deibis";
let apellido = "Contreras";

//Concateniación
let saludo = "hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);

//Interpolación de variables:
/*
 Meter dentro de una cadena de texto en valor de una variable
 Pero se debe usar
 template String
*/

/* `` = ese caracter se llama bacti acento grave o acento invertido*/
let saludo2 = `hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul = "<ul><li>Primevera</li><li>Verano</li><li>Otono</li><li>Invierno</li></ul>";
console.log(ul);

/*El templete String permite realizar saltos de lineas = ``*/

let ul2 = `<ul>
			<li>Primevera</li>
			<li>Verano</li>
			<li>Otono</li>
			<li>Invierno</li>
		</ul>`;
console.log(ul2);
console.log(ul2.length);
console.log(ul2.toUpperCase());

