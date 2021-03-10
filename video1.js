/* Video 1;
		Las variables declaras con VAR son de ambito global.

		LET: Las variables delcaradas con LECT son de ambito de un bloque solamente

		WINDOW: contiene todo lo que se encuentro en el DOM
	*/
/*************** Video 1: *********** */
	console.log(window)
	console.log("************VAR*********");
	var musica = "baladas";
	console.log("variables antes del bloque",  musica);

	{
		var musica = "rancheras";
		console.log("variables destro del bloque",  musica)
	}
	console.log("variables despues del bloque",  musica)
	console.log('hola');

	console.log("************LET*********");

	let musica2 = "baladas";
	console.log("variables antes del bloque",  musica2);

	{
		let musica2 = "rancheras";
		console.log("variables destro del bloque",  musica2)
	}
	console.log("variables despues del bloque",  musica2)
	console.log('hola');