/*Un objecto */

let objecto1 = {};
console.log(objecto1);

/*En un Objecto una variable se llama atributo
y una función se llama metodo
*/

let objecto2 = {
	nombre: "deibis",
	apellido: "Contreras",
	edad: "27",
	pasatiempos: ["programar", "comer", "caminar"],
	soltero: true,
	contacto: {
		email: "deibiscontreras@gmail.com",
		twitter: "@deibis016",
		telefono: "0424.121.42.41"
	},
	saludar: function() {
		console.log('hola');
	},
	miNombre: function() {
		console.log("hola me llamo " + this.nombre + " " + this.apellido);
	}
};

console.log(objecto2);
console.log(objecto2.nombre);
console.log(objecto2.apellido);
console.log(objecto2.edad);
console.log(objecto2.pasatiempos);
console.log(objecto2.pasatiempos[0]);
console.log(objecto2.contacto);
console.log(objecto2.contacto.email);
//objecto2.saludar();
objecto2.miNombre();

//console.log(Object.keys());