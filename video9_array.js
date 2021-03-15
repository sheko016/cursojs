/*Un Arrar es una coleción de datos*/

let getArreglo = [1, true, "hola", ["a", "b", "c"]];

console.log(getArreglo);
console.log(getArreglo.length);
console.log(getArreglo[2]);
console.log(getArreglo[3]);
console.log(getArreglo[3].length);
console.log(getArreglo[3][2]);

/*Tambien se puede declarar de la siguiente forma*/
let c = Array.of("fdf", "dfgfdgh", "df", 3, 4, "deibs");
console.log(c);


/*Colocar un dato fijo a un array para que se llene en todas sus posiciones*/

let d = Array(50).fill(false);
console.log(d);

let colores = ['rojo', 'verde', 'azul'];
console.log(colores);

//Agrega un nuevo color a lo ultimo del array
colores.push("negro");
console.log(colores);

//quita el ultimo elemento del array
colores.pop();
console.log(colores);

colores.forEach(function(elemento, index) {
	console.log(`<li id="${index}"> ${elemento} </li>`)
});