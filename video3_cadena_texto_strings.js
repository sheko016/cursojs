console.log('MDN Documentación no oficial para desarrolladore de Java scripts');
console.log('Todo en JS es un Objeto');
console.log('La cual tiene sus propiedades y metodos');

console.log('NEW: Permite crear un nuevo objeto');

console.log('Cadenas de Textos');

console.log("*****************************");
console.log("*****************************");
console.log("*****************************");
let nombre = "Deibis";
let apellido = "Contreras";
let saludo = new String("hola mundo");
let lorem = "          lorem caracas venezuela,   baraanquilla caracas ciuda pais este, es caracas jdf g jrhrufb  h fyuefeuf gyef gef eygyegfey eygye deyd eyge tyefdyefg ygfey"

console.log(nombre, apellido, saludo);

console.log(nombre.length, apellido.length, saludo);

console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
console.log(lorem);
console.log(lorem.includes("caracas")); //Busca si existe una cadena dentro del texto
console.log(lorem.includes("deibis"));
console.log(lorem.trim()); //Quita los primeros espacios
console.log(lorem.split(" ")); //Te conviente la cadena en un array
console.log(lorem.split(","));